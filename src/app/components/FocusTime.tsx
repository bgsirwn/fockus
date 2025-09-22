'use client';

import { ForwardIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export default function FocusTime() {

    const [focusTime, setFocusTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(focusTime * 60);
    const [isFocusSession, setIsFocusSession] = useState(true);

    // Sync timeLeft ke durasi saat sesi atau durasi berubah, tapi hanya jika tidak berjalan.
    useEffect(() => {
        if (!isRunning) {
        setTimeLeft(isFocusSession ? focusTime * 60 : breakTime * 60);
        }
    }, [focusTime, breakTime, isFocusSession]);

    // Timer tick. Hanya berjalan jika isRunning true.
    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);

    // Reaction saat timeLeft mencapai 0.
    useEffect(() => {
        if (timeLeft > 0) return;

        // Pastikan timer dihentikan.
        setIsRunning(false);

        // Toggle sesi dan set waktu untuk sesi berikutnya.
        setIsFocusSession(prev => {
        const next = !prev;
        setTimeLeft(next ? focusTime * 60 : breakTime * 60);
        return next;
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft]); // intentionally only depend on timeLeft

     // === Tambahkan efek ini untuk update title ===
    useEffect(() => {
        const mins = Math.floor(timeLeft / 60).toString().padStart(2, "0");
        const secs = (timeLeft % 60).toString().padStart(2, "0");
        const prefix = isFocusSession ? "Focus" : "Break";
        const status = isRunning ? "" : " (Paused)";
        document.title = `${prefix} ${mins}:${secs}${status}`;
    }, [timeLeft, isFocusSession, isRunning]);


    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };


    const handleSkip = () => {
    setIsRunning(false);
    setIsFocusSession(prev => {
        const next = !prev;
        setTimeLeft(next ? focusTime * 60 : breakTime * 60);
        return next;
        });
    };

   

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold mb-8">Focus Time</h1>
            <div className="p-8 rounded-lg shadow-lg w-100 border-2">
                <div className="text-center mb-8 text-white">
                    <h2 className="text-2xl font-semibold">{isFocusSession ? 'Focus Session' : 'Break Time'}</h2>
                    <p className="flex justify-center items-center text-6xl w-50 h-50 font-mono my-4 mx-auto border-2 rounded-full">{formatTime(timeLeft)}</p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <button
                        onClick={handleStartPause}
                        className="px-4 py-2 w-50 text-xl text-white rounded bg-gray-700 hover:bg-amber-400"
                    >
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button
                        onClick={handleSkip}
                    >
                        <ForwardIcon className={`size-6 ${isRunning ? 'translate-x-0 opacity-100' : 'hidden'}`}/>
                    </button>
                </div>
               
            </div>
        </div>
    );
}