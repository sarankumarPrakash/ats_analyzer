import React, { useState } from "react";
import axios from "axios";
import { PageLayout } from "../components/Layout/PageLayout";
import { FileUploader } from "../components/Upload/FileUploader";
import { JobDescriptionInput } from "../components/Upload/JobDescriptionInput";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumeChecker() {
    const [file, setFile] = useState(null);
    const [jd, setJd] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        if (!file || !jd) return;

        setIsAnalyzing(true);
        setResult(null);

        try {
            const formData = new FormData();
            formData.append("resume_data", file);
            formData.append("job_description", jd);

            const { data } = await axios.post(
                "https://resumeats.app.n8n.cloud/webhook/f506940f-84e2-4b22-9234-774f54432ef8",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            setResult(data);
        } catch (err) {
            console.error(err);
            alert("ATS Analysis failed");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <PageLayout>
            <div className="mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 text-sm"
                >
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-3xl font-bold">Resume ATS Checker</h1>
                <p className="text-slate-400 mt-2">
                    Upload your resume and job description to get ATS compatibility
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* INPUT */}
                <div className="glass-card p-6 space-y-6">
                    <FileUploader onFileSelect={setFile} selectedFile={file} />
                    <JobDescriptionInput value={jd} onChange={setJd} />

                    <button
                        onClick={handleAnalyze}
                        disabled={!file || !jd || isAnalyzing}
                        className="w-full py-4 rounded-xl bg-primary font-bold text-white shadow-lg disabled:opacity-50"
                    >
                        {isAnalyzing ? "Scanning..." : "Analyze Resume"}
                    </button>
                </div>

                {/* OUTPUT */}
                {/* OUTPUT */}
                <div className="space-y-6">

                    {!result && !isAnalyzing && (
                        <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-700 rounded-xl p-10 opacity-50">
                            Results will appear here
                        </div>
                    )}

                    {isAnalyzing && (
                        <div className="glass-card p-10 text-center text-slate-300 animate-pulse">
                            Analyzing your resume against ATS...
                        </div>
                    )}

                    {result && !isAnalyzing && (
                        <div className="glass-card p-6 space-y-8">

                            {/* SCORES */}
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-slate-900 p-4 rounded-xl text-center">
                                    <p className="text-sm text-slate-400">ATS Score</p>
                                    <p className="text-4xl font-bold text-primary">
                                        {result.raw.ats_score}
                                    </p>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl text-center">
                                    <p className="text-sm text-slate-400">Skill Match</p>
                                    <p className="text-4xl font-bold text-secondary">
                                        {result.raw.skill_match_percentage}%
                                    </p>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl text-center">
                                    <p className="text-sm text-slate-400">Job Match</p>
                                    <p className="text-xl font-bold text-green-400">
                                        {result.raw.job_title_match}
                                    </p>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-xl text-center">
                                    <p className="text-sm text-slate-400">Experience</p>
                                    <p className="text-xl font-bold text-green-400">
                                        {result.raw.experience_match}
                                    </p>
                                </div>
                            </div>

                            {/* FINAL VERDICT */}
                            <div className="text-center bg-green-500/10 text-green-400 p-4 rounded-xl font-bold text-lg">
                                Final Verdict: {result.raw.final_verdict}
                            </div>

                            {/* MISSING KEYWORDS */}
                            <div>
                                <h3 className="font-semibold mb-3">Missing Keywords</h3>
                                <div className="flex flex-wrap gap-2">
                                    {result.raw.missing_keywords.map((k, i) => (
                                        <span key={i} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
                                            {k}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* WEAK SECTIONS */}
                            <div>
                                <h3 className="font-semibold mb-3">Weak Resume Sections</h3>
                                <ul className="list-disc list-inside text-slate-400">
                                    {result.raw.weak_resume_sections.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* IMPROVEMENT SUGGESTIONS */}
                            <div>
                                <h3 className="font-semibold mb-3">Improvement Suggestions</h3>
                                <div className="space-y-3">
                                    {result.raw.improvement_suggestions.map((s, i) => (
                                        <div key={i} className="bg-slate-900 p-4 rounded-lg">
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* BULLET POINT FIXES */}
                            <div>
                                <h3 className="font-semibold mb-3">Resume Bullet Improvements</h3>
                                <div className="space-y-4">
                                    {result.raw.bullet_point_fixes.map((b, i) => (
                                        <div key={i} className="bg-slate-900 p-4 rounded-xl space-y-2">
                                            <p className="text-red-400 text-sm">Before:</p>
                                            <p className="text-slate-400">{b.current}</p>

                                            <p className="text-green-400 text-sm mt-2">After:</p>
                                            <p className="text-green-300 font-medium">{b.improved}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* OPTIMIZED SUMMARY */}
                            <div>
                                <h3 className="font-semibold mb-3">Optimized Resume Summary</h3>
                                <div className="bg-slate-900 p-4 rounded-xl text-slate-200 leading-relaxed">
                                    {result.raw.optimized_summary}
                                </div>
                            </div>

                        </div>
                    )}

                </div>

            </div>
        </PageLayout>
    );
}
