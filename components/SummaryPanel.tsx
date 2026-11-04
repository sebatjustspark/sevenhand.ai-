import React, { useState, useEffect } from 'react';
import { getSuggestions } from '../services/ai';
const KEY='7h_summary_text';
export const SummaryPanel: React.FC = () => {
  const [text,setText]=useState('');
  const [summary,setSummary]=useState('');
  const [busy,setBusy]=useState(false);
  useEffect(()=>{ setText(localStorage.getItem(KEY)||''); },[]);
  const summarize=async()=>{
    if(!text.trim()) return;
    localStorage.setItem(KEY,text);
    setBusy(true);
    try{
      const suggestions=await getSuggestions(text);
      setSummary(suggestions.join(', ')||'No summary returned.');
    } catch(e){ console.error(e); setSummary('Could not summarize this text. Check Gemini configuration and try again.'); }
    finally{ setBusy(false); }
  };
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Summarize text</h2>
      <p className="text-zinc-500 mb-4">Paste or show text here. This uses the existing getSuggestions service, stores only in localStorage, and does not add a new backend.</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} rows={8} placeholder="Paste text to summarize..." className="w-full px-4 py-3 text-base border border-zinc-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent" />
      <button onClick={summarize} disabled={!text.trim()||busy} className="w-full mt-4 py-3 bg-zinc-900 text-white text-lg font-medium rounded-xl hover:bg-zinc-800 disabled:opacity-50 transition-all duration-500 ease-out shadow-sm">{busy?'Summarizing...':'Summarize'}</button>
      {summary ? <div className="mt-6 bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-zinc-900">{summary}</div> : null}
    </div>
  );
};
export default SummaryPanel;
