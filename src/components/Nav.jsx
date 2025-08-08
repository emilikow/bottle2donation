import React from 'react'
export default function Nav({active, setActive}){
  const items=[['home','Home'],['windows','Collection Windows'],['destinations','Destinations'],['accepted','Accepted Bottles'],['reference','Bottle Reference'],['impact','My Impact'],['leaderboard','Leaderboard'],['admin','Admin']]
  return (
    <header>
      <div className="bar container">
        <div className="brand flex items-center gap-2">
          <span>Bottle</span><span className="text-brand">•</span><span>Donation</span>
          <span className="badge ml-2">Beta</span>
        </div>
        <nav className="ml-auto flex gap-2 flex-wrap">
          {items.map(([key,label])=> (
            <button key={key} className={'btn ' + (active===key? 'primary':'')} onClick={()=>setActive(key)}>{label}</button>
          ))}
        </nav>
      </div>
    </header>
  )
}
