"use client"
import React from "react";

type AlertProps = {
    open : boolean,
    title : string,
    msg : string,
    onClose : () => void;
}

export default function Alert({open, title, msg, onClose}: AlertProps) {


    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-in fade-in zoom-in duration-100">
          <div className="p-6 w-1/2 rounded-lg shadow-lg bg-black">
            <h2 className="text-2xl font-bold mb-4">{title !== "" ? title : "Alert"}</h2>
            <p className="mb-4">{msg}</p>
            <div className="flex justify-end">
                <button
                onClick={onClose}
                className="mt-4 border-2 border-amber-500 rounded-full px-10 py-2 font-semibold hover:bg-amber-500 hover:text-white"
                >
                Close
                </button>
            </div>
          </div>
        </div>
    );
}