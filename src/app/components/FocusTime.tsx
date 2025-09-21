'use client';

import { ForwardIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function FocusTime() {

    const [focusTime, setFocusTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(focusTime * 60);
    const [isFocusSession, setIsFocusSession] = useState(true);

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            if (isFocusSession) {
                setIsFocusSession(false);
                setTimeLeft(breakTime * 60);
            } else {
                setIsFocusSession(true);
                setTimeLeft(focusTime * 60);
            }
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft, isFocusSession, focusTime, breakTime]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartPause = () => {
        setIsRunning(!isRunning);
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
                    <button>
                        <ForwardIcon className={`size-6 ${isRunning ? 'translate-x-0 opacity-100' : 'hidden'}`}/>
                    </button>
                </div>
               
            </div>
        </div>
    );
}