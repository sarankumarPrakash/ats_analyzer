import React from "react";
import { ArrowRight, FileCheck, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-[#302727] flex items-center justify-center overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-[-30%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[140px] rounded-full" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 space-y-10">

                {/* Floating Badge */}
                <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-slate-200 animate-float shadow-lg">
                    <Sparkles className="text-secondary" size={18} />
                    AI-Powered Resume Optimization
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    Beat the{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                        ATS Robot
                    </span>
                    <br />
                    <span className="text-white">Get Hired Faster</span>
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
                    Our AI scans your resume and LinkedIn against job descriptions, highlights missing keywords,
                    fixes ATS issues, and increases your interview chances.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                        to="/resume-check"
                        className="relative px-10 py-5 bg-primary rounded-xl font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105 transition-all"
                    >
                        <span className="flex items-center gap-3 relative z-10">
                            Scan Resume <ArrowRight />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition" />
                    </Link>

                    <Link
                        to="/linkedin-check"
                        className="px-10 py-5 rounded-xl border border-white/20 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-3"
                    >
                        Check LinkedIn <Search />
                    </Link>
                </div>

                {/* Floating Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 max-w-6xl w-full">

                    {/* Card */}
                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all shadow-xl">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary p-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-float">
                            <FileCheck className="text-white" size={28} />
                        </div>
                        <h3 className="mt-8 text-xl font-semibold text-white">Smart Parsing</h3>
                        <p className="text-slate-300 mt-2">
                            Accurately extracts skills, experience, and projects from any resume format.
                        </p>
                    </div>

                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all shadow-xl">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary p-4 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.6)] animate-float delay-200">
                            <Search className="text-white" size={28} />
                        </div>
                        <h3 className="mt-8 text-xl font-semibold text-white">Keyword Matching</h3>
                        <p className="text-slate-300 mt-2">
                            Finds missing ATS keywords directly from job descriptions.
                        </p>
                    </div>

                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all shadow-xl">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent p-4 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.6)] animate-float delay-500">
                            <ShieldCheck className="text-white" size={28} />
                        </div>
                        <h3 className="mt-8 text-xl font-semibold text-white">ATS Format Check</h3>
                        <p className="text-slate-300 mt-2">
                            Ensures layout, fonts, and sections are fully ATS-compatible.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
