"use client";

import { useMemo, useState } from "react";

type Entry = {
  id: string;
  title: string;
  category: "Draft" | "Published";
  summary: string;
  date: string;
  issue: string;
};

const ENTRIES: Entry[] = [
  {
    id: "mass-templates",
    title: "Why I paused mass templates",
    category: "Published",
    summary: "Depth over vanity count. A note about making fewer interfaces with more point of view.",
    date: "24 Aug 2026",
    issue: "01",
  },
];

const FILTERS = ["All", "Draft", "Published"];

export default function WritingDesk() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const entries = useMemo(() => ENTRIES.filter((entry) => {
    const text = `${entry.title} ${entry.summary} ${entry.category}`.toLowerCase();
    return (filter === "All" || entry.category === filter) && text.includes(query.toLowerCase());
  }), [filter, query]);

  return (
    <main className="writing-shell">
      <header className="writing-header">
        <div className="writing-mark">B/14</div>
        <div className="writing-brand"><strong>THE WRITING DESK</strong><span>PROOFS / PUBLISHED NOTES</span></div>
        <div className="writing-state"><i /> ONE OPERATOR · STATIC INDEX</div>
      </header>

      <section className="writing-hero">
        <div>
          <p className="writing-kicker">BOOKCHAOWALIT / EDITORIAL REGISTER</p>
          <h1>Put the thought<br /><em>on paper.</em></h1>
          <p className="writing-lede">A small reading list for drafts, decisions, and the sentences that survive another pass.</p>
        </div>
        <div className="desk-card" aria-label="Writing desk status"><span>DESK NOTE</span><strong>01</strong><b>READ SLOWLY<br />EDIT HONESTLY</b></div>
      </section>

      <section className="proofing-desk" aria-label="Writing index">
        <div className="proofing-head">
          <div><span>PROOFING TABLE / 001</span><h2>What made the cut.</h2></div>
          <div className="proof-count"><strong>{String(entries.length).padStart(2, "0")}</strong><span>VISIBLE<br />NOTES</span></div>
        </div>
        <div className="writing-controls">
          <label><span>Find a note</span><input placeholder="Search the desk" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          <div className="writing-filters" role="group" aria-label="Writing status">
            {FILTERS.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
        </div>
        <div className="proof-rule"><span>ISSUE / STATUS / SUBJECT</span><span>LOCAL COPY · READ ONLY</span></div>
        {entries.length === 0 ? (
          <div className="empty-proof"><span>NO PROOF</span><p>No note matches this search. Try a different phrase or return to All.</p></div>
        ) : (
          <div className="entry-list">
            {entries.map((entry) => (
              <article className="entry-row" key={entry.id}>
                <span className="entry-number">{entry.issue}</span>
                <div className="entry-copy"><span className="entry-category">{entry.category}</span><h3>{entry.title}</h3><p>{entry.summary}</p></div>
                <div className="entry-meta"><time>{entry.date}</time><span>READING COPY</span></div>
              </article>
            ))}
          </div>
        )}
        <p className="writing-note">This desk is a static portfolio index. It has no editor, CMS, publishing pipeline, or private drafts behind it.</p>
      </section>

      <footer className="writing-footer"><span>BOOKCHAOWALIT / WRITING</span><span>STATIC DEMO CONTENT · NO CMS</span></footer>
    </main>
  );
}
