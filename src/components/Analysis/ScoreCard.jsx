import React from 'react';
import { cn } from '../../lib/utils';

export function ScoreCard({ score = 0, isLoading = false }) {
    // Determine color based on score
    const getColor = (s) => {
        if (s >= 80) return "text-secondary border-secondary";
        if (s >= 60) return "text-yellow-400 border-yellow-400";
        return "text-red-400 border-red-400";
    }

    // Calculate Dash array for circle (Radius 45, Circumference ~283)
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center p-6 glass-card w-full max-w-[300px] mx-auto aspect-square relative">
            {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                    <p className="absolute text-sm font-medium animate-pulse text-primary mt-40">Analyzing...</p>
                </div>
            ) : (
                <>
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="80"
                                cy="80"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-slate-700"
                            />
                            <circle
                                cx="80"
                                cy="80"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className={cn("transition-all duration-1000 ease-out", getColor(score).split(" ")[0])}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={cn("text-4xl font-bold", getColor(score).split(" ")[0])}>{score}</span>
                            <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">Score</span>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-lg font-semibold text-white">
                            {score >= 80 ? "Excellent Match!" : score >= 60 ? "Good Potential" : "Needs Improvement"}
                        </h3>
                    </div>
                </>
            )}
        </div>
    );
}
