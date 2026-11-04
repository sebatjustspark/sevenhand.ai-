import React from 'react';
import { Link } from 'react-router-dom';
import SummaryPanel from './SummaryPanel';
export const Summary: React.FC = () => (
  <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden">
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight">7H<span className="text-zinc-900">.ai</span></div>
      <div className="flex gap-4">
        <Link to="/app" className="px-5 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-500 ease-out">Keyboard</Link>
        <Link to="/app/summary" className="px-5 py-2.5 text-sm font-medium bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all duration-500 ease-out">Summary</Link>
      </div>
    </nav>
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-32"><SummaryPanel /></main>
  </div>
);
export default Summary;
