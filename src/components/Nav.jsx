import React from "react";

const tabs = [
  ["home", "Home"],
  ["windows", "Collection Windows"],
  ["destinations", "Destinations"],
  ["accepted", "Accepted Bottles"],
  ["reference", "BOTTLE BLAH Reference"],
  ["impact", "My Impact"],
  ["leaderboard", "Leaderboard"],
  ["admin", "Admin"],
];

export default function Nav({ active, setActive }) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-narrow flex items-center gap-3 py-3">
        <div className="font-extrabold tracking-wide">
          Bottle<span className="mx-1 align-[-2px]">•</span>Donation
        </div>

        <nav className="ml-auto flex gap-1 whitespace-nowrap overflow-x-auto">
          {tabs.map(([key, label]) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={
                  "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors " +
                  (isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-slate-900 bg-white border border-transparent hover:border-slate-200")
                }
              >
                {label}
                <span
                  className={
                    "pointer-events-none absolute left-3.5 right-3.5 -bottom-[6px] h-[2px] rounded-full transition-opacity " +
                    (isActive ? "bg-blue-600 opacity-100" : "opacity-0")
                  }
                />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
