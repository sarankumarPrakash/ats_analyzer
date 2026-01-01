import React from 'react';
import { Navbar } from './Navbar';

export function PageLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#302727] relative overflow-hidden text-white selection:bg-primary/30">

            {/* Abstract Background Shapes */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden  pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow delay-700" />
            </div>

            {/* Fixed Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="pt-24 pb-20 px-6 relative z-10 w-full max-w-7xl mx-auto">
                {children}
            </main>

        </div>
    );
}
