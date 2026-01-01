import React from 'react';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export function FeedbackList({ feedback, keywords }) {
    if (!feedback) return null;

    return (
        <div className="space-y-6 w-full">
            {/* Keywords Section */}
            <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full" />
                    Keyword Match Analysis
                </h3>
                <div className="flex flex-wrap gap-2">
                    {keywords?.found?.map((k, i) => (
                        <span key={`f-${i}`} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 flex items-center gap-1">
                            <CheckCircle2 size={12} /> {k}
                        </span>
                    ))}
                    {keywords?.missing?.map((k, i) => (
                        <span key={`m-${i}`} className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1">
                            <XCircle size={12} /> {k}
                        </span>
                    ))}
                </div>
            </div>

            {/* Improvements Section */}
            <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-accent rounded-full" />
                    Actionable Feedback
                </h3>
                <div className="space-y-3">
                    {feedback.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <AlertCircle size={20} className={cn("mt-0.5 shrink-0", item.type === 'critical' ? 'text-red-400' : 'text-yellow-400')} />
                            <div>
                                <p className="text-sm font-medium text-slate-200">{item.title}</p>
                                <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
