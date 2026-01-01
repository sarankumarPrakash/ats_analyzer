import React from 'react';
import { cn } from '../../lib/utils';

export function JobDescriptionInput({ value, onChange }) {
    return (
        <div className="w-full space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Job Description</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Paste the job description here (responsibilities, requirements, skills)..."
                className={cn(
                    "w-full h-40 rounded-xl bg-white/5 border border-white/20 p-4 text-sm text-slate-200 resize-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600",
                    "scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                )}
            />
        </div>
    );
}
