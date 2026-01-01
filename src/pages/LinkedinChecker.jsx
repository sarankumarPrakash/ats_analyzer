import React, { useState } from 'react';
import { PageLayout } from '../components/Layout/PageLayout';
import { FileUploader } from '../components/Upload/FileUploader';
import { ScoreCard } from '../components/Analysis/ScoreCard';
import { FeedbackList } from '../components/Analysis/FeedbackList';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LinkedinChecker() {
    const [file, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = () => {
        if (!file) return;

        setIsAnalyzing(true);
        setResult(null);

        // Mock LinkedIn Analysis
        setTimeout(() => {
            setResult({
                score: 72,
                keywords: {
                    found: ['React', 'Leadership', 'Project Management', 'Networking'],
                    missing: ['Recommendations', 'Featured Section', 'Activity']
                },
                feedback: [
                    { type: 'critical', title: 'Summary Too Short', description: 'Your "About" section is brief. Expand it to include your core value proposition.' },
                    { type: 'warning', title: 'Missing Recommendations', description: 'Profiles with recommendations get 3x more inquiries.' },
                    { type: 'warning', title: 'URL Not Customized', description: 'Customize your public profile URL for better SEO and professionalism.' }
                ]
            });
            setIsAnalyzing(false);
        }, 2000);
    };

    return (
        <PageLayout>
            <div className="mb-8">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 text-sm">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Linkedin className="text-[#0077b5]" size={32} /> LinkedIn Profile Checker
                </h1>
                <p className="text-slate-400 mt-2">Export your LinkedIn profile to PDF and upload it here to audit your personal brand.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="glass-card p-6 space-y-6">
                        <div className="bg-[#0077b5]/10 border border-[#0077b5]/20 p-4 rounded-xl text-sm text-[#0077b5]">
                            <strong>Tip:</strong> Go to your LinkedIn Profile → Click "More" → "Save to PDF".
                        </div>

                        <FileUploader
                            onFileSelect={setFile}
                            selectedFile={file}
                            label="Upload LinkedIn Profile PDF"
                        />

                        <button
                            onClick={handleAnalyze}
                            disabled={!file || isAnalyzing}
                            className="w-full py-4 rounded-xl bg-[#0077b5] font-bold text-white shadow-lg shadow-[#0077b5]/25 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0077b5]/90 transition-all active:scale-95"
                        >
                            {isAnalyzing ? "Auditing Profile..." : "Audit LinkedIn Profile"}
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {!result && !isAnalyzing ? (
                        <div className="h-full flex flex-col items-center justify-center p-12 text-center opacity-50 border-2 border-dashed border-slate-700 rounded-2xl">
                            <div className="w-16 h-16 rounded-full bg-slate-800 mb-4" />
                            <p>Results will appear here after analysis</p>
                        </div>
                    ) : (
                        <>
                            <ScoreCard score={result?.score || 0} isLoading={isAnalyzing} />
                            {!isAnalyzing && <FeedbackList feedback={result?.feedback} keywords={result?.keywords} />}
                        </>
                    )}
                </div>
            </div>
        </PageLayout>
    );
}
