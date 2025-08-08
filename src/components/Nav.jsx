import React from 'react'

const tabs = [
  ['home','Home'],
  ['windows','Collection Windows'],
  ['destinations','Destinations'],
  ['accepted','Accepted Bottles'],
  ['reference','Bottle Reference'],
  ['impact','My Impact'],
  ['leaderboard','Leaderboard'],
  ['admin','Admin']
];

export default function Nav({active, setActive}){
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-narrow flex items-center gap-3 py-3">
        <div className="font-extrabold tracking-wide">
          Bottle<span className="text-brand-500">•</span>Donation
          <span className="ml-2 px-2 py-[2px] rounded-full text-xs border border-slate-200 bg-indigo-50 text-slate-700">Beta</span>
        </div>
        <nav className="ml-auto flex gap-2 flex-wrap">
          {tabs.map(([key,label]) => (
            <button
              key={key}
              onClick={()=>setActive(key)}
              className={"btn " + (active===key ? "btn-primary" : "")}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
