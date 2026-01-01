export default function ATSScoreCard({ result, loading }) {
    if (loading) {
        return (
            <div className="glass-card p-6 animate-pulse">
                <div className="h-6 bg-slate-700 rounded w-1/3 mb-4" />
                <div className="h-10 bg-slate-700 rounded" />
            </div>
        );
    }

    return (
        <div className="glass-card p-6 grid grid-cols-2 gap-4">
            <div>
                <p className="text-slate-400 text-sm">ATS Score</p>
                <p className="text-4xl font-bold text-primary">
                    {result.ats_score}/100
                </p>
            </div>

            <div>
                <p className="text-slate-400 text-sm">Skill Match</p>
                <p className="text-4xl font-bold text-green-400">
                    {result.skill_match}%
                </p>
            </div>

            <div>
                <p className="text-slate-400 text-sm">Verdict</p>
                <p
                    className={`text-xl font-semibold ${result.verdict === "Strong"
                            ? "text-green-400"
                            : result.verdict === "Borderline"
                                ? "text-yellow-400"
                                : "text-red-400"
                        }`}
                >
                    {result.verdict}
                </p>
            </div>
        </div>
    );
}
