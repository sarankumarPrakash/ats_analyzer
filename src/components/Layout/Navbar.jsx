import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Linkedin, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
    const location = useLocation();

    const NavItem = ({ to, icon: Icon, label }) => {
        const isActive = location.pathname === to;
        return (
            <Link
                to={to}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                    isActive
                        ? "bg-primary/20 text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-primary/30"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
            >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
            </Link>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#302727] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    {/* <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
                        <ShieldCheck size={24} className="text-white" />
                    </div> */}
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        ATS<span className="text-primary">Guard</span>
                    </span>
                </Link>

                {/* Nav Items */}
                <div className="flex items-center gap-2">
                    <NavItem to="/resume-check" icon={FileText} label="Resume Check" />
                    <NavItem to="/linkedin-check" icon={Linkedin} label="LinkedIn Check" />
                </div>

                {/* Action */}
                <div className="hidden md:block">
                    {/* <button className="px-5 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-sm font-medium transition-colors">
                        Sign In
                    </button> */}
                </div>

            </div>
        </nav>
    );
}
