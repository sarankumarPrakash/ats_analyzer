export default function ATSReport({ result }) {
    const raw = result.raw;

    return (
        <div className="glass-card p-6 space-y-6 text-sm">
            {/* Job Matching */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-slate-400">Job Title Match</p>
                    <p className="font-semibold">{raw.job_title_match}</p>
                </div>
                <div>
                    <p className="text-slate-400">Experience Match</p>
                    <p className="font-semibold">{raw.experience_match}</p>
                </div>
            </div>

            {/* Missing Keywords */}
            <div>
                <h3 className="font-semibold mb-2 text-red-400">Missing Keywords</h3>
                <div className="flex flex-wrap gap-2">
                    {raw.missing_keywords.map((k, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-300"
                        >
                            {k}
                        </span>
                    ))}
                </div>
            </div>

            {/* Weak Sections */}
            <div>
                <h3 className="font-semibold mb-2 text-yellow-400">
                    Weak Resume Sections
                </h3>
                <ul className="list-disc ml-5">
                    {raw.weak_resume_sections.map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                </ul>
            </div>

            {/* Suggestions */}
            <div>
                <h3 className="font-semibold mb-2 text-blue-400">
                    Improvement Suggestions
                </h3>
                <ul className="list-decimal ml-5 space-y-1">
                    {raw.improvement_suggestions.map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                </ul>
            </div>

            {/* Bullet Fixes */}
            <div>
                <h3 className="font-semibold mb-2 text-green-400">
                    Bullet Point Improvements
                </h3>

                {raw.bullet_point_fixes.map((b, i) => (
                    <div key={i} className="mb-4">
                        <p className="text-red-400">❌ {b.current}</p>
                        <p className="text-green-400">✅ {b.improved}</p>
                    </div>
                ))}
            </div>

            {/* Optimized Summary */}
            <div>
                <h3 className="font-semibold mb-2 text-primary">
                    Optimized Resume Summary
                </h3>
                <p className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                    {raw.optimized_summary}
                </p>
            </div>
        </div>
    );
}
