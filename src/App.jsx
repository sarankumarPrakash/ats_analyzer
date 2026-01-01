import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/Layout/PageLayout';
import { Hero } from './components/Home/Hero';
import ResumeChecker from './pages/ResumeChecker';
import LinkedinChecker from './pages/LinkedinChecker';

function Home() {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume-check" element={<ResumeChecker />} />
      <Route path="/linkedin-check" element={<LinkedinChecker />} />
    </Routes>
  );
}

export default App;
