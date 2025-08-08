import React from 'react'

export default function Nav({active, setActive}){
  const items = [
    ['home','Home'],
    ['windows','Collection Windows'],
    ['destinations','Destinations'],
    ['accepted','Accepted Bottles'],
    ['reference','Bottle Reference'],
    ['impact','My Impact'],
    ['leaderboard','Leaderboard'],
    ['admin','Admin'],
  ]
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/85 border-b border-slate-200">
      <div className="container flex items-center gap-3 py-3">
        <div className="font-extrabold tracking-wide">
          <span>Bottle</span><span className="text-brand">•</span><span>Donation</span>
          <span className="ml-2 px-2 py-[2px] rounded-full text-xs border border-slate-200 bg-indigo-50 text-slate-700">Beta</span>
        </div>
        <nav className="ml-auto flex gap-2 whitespace-nowrap overflow-x-auto">
  {tabs.map(([key, label]) => (
    <button
      key={key}
      onClick={() => setActive(key)}
      className={
        "px-4 py-2 rounded-lg text-sm font-medium transition-colors " +
        (active === key
          ? "bg-blue-600 text-white shadow-sm"
          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50")
      }
    >
      {label}
    </button>
  ))}
</nav>
      </div>
    </header>
  )
}
