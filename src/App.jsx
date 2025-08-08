import React, { useState, useMemo } from 'react'
import Nav from './components/Nav.jsx'

const cities = [{ id:'even-yehuda', name:'Even Yehuda', refund:0.30 }]
const destinations = [{ id:'wbais', name:'WBAIS', description:'School philanthropy', city:'even-yehuda' }]
const windows = [
  { id:'w1', city:'even-yehuda', start:'2025-08-10T09:00:00+03:00', end:'2025-08-10T11:00:00+03:00' },
  { id:'w2', city:'even-yehuda', start:'2025-08-12T18:00:00+03:00', end:'2025-08-12T20:00:00+03:00' },
  { id:'w3', city:'even-yehuda', start:'2025-08-15T08:00:00+03:00', end:'2025-08-15T10:00:00+03:00' },
]

function fmtRange(sISO,eISO){
  const s=new Date(sISO), e=new Date(eISO)
  return s.toLocaleString([], { dateStyle:'medium', timeStyle:'short' }) + ' – ' + e.toLocaleTimeString([], { timeStyle:'short' })
}

export default function App(){
  const [active,setActive]=useState('home')
  const [city,setCity]=useState(cities[0].id)
  const [profile,setProfile]=useState({ displayName:'RecyclingFan42', address:'50 Hashomron, Even Yehuda', destination:destinations[0].id })
  const [confirmed,setConfirmed]=useState({})
  const upcoming = useMemo(()=> windows.filter(w=> w.city===city),[city])

  return (
    <div className="min-h-screen" style={{fontFamily:'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <Nav active={active} setActive={setActive} />
      <main className="container space-y-4">
        {active==='home' && (
          <div className="space-y-4">
            <section className="hero">
              <h1 className="text-3xl font-extrabold">Turn bottles into donations</h1>
              <p className="text-slate-600 mt-1">Even Yehuda pilot • 2‑hour pickup windows • ₪0.30 per bottle • Even split across your chosen destinations</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <button className="btn btn-primary" onClick={()=>setActive('windows')}>See Collection Times</button>
                <button className="btn" onClick={()=>setActive('destinations')}>Choose My Destination</button>
              </div>
            </section>

            <div className="layout-grid">
              <section className="card col-span-12 md:col-span-8">
                <h2 className="text-xl font-semibold mb-2">City & Settings</h2>
                <label className="label">Your City</label>
                <select className="input w-full" value={city} onChange={e=>setCity(e.target.value)}>
                  {cities.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="card"><div className="text-2xl font-extrabold">₪0.30</div><div className="text-slate-600">Per bottle</div></div>
                  <div className="card"><div className="text-2xl font-extrabold">2 hrs</div><div className="text-slate-600">Pickup window</div></div>
                  <div className="card"><div className="text-2xl font-extrabold">Even Split</div><div className="text-slate-600">Across destinations</div></div>
                </div>
              </section>

              <section className="card col-span-12 md:col-span-4">
                <h3 className="text-lg font-semibold mb-2">Profile</h3>
                <div className="text-slate-600">Display Name</div>
                <div>{profile.displayName} <span className="ml-2 px-2 py-[2px] rounded-full text-xs border border-slate-200 bg-indigo-50 text-slate-700">anonymous ok</span></div>
                <div className="text-slate-600 mt-2">Address</div>
                <div>{profile.address}</div>
                <div className="text-slate-600 mt-2">Preferred Destination</div>
                <div>WBAIS</div>
              </section>
            </div>
          </div>
        )}

        {active==='windows' && (
          <section className="card">
            <h2 className="text-xl font-semibold mb-2">Collection Windows</h2>
            <div className="space-y-2">
              {upcoming.map(w => (
                <div key={w.id} className="row">
                  <div className="flex items-center gap-3">
                    <span className="pill">{new Date(w.start).toLocaleDateString()}</span>
                    <span>{fmtRange(w.start,w.end)}</span>
                  </div>
                  <div>
                    {confirmed[w.id]
                      ? <button className="btn" onClick={()=>setConfirmed(p=>({...p,[w.id]:false}))}>Cancel</button>
                      : <button className="btn btn-primary" onClick={()=>setConfirmed(p=>({...p,[w.id]:true}))}>Confirm Pickup</button>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {active==='destinations' && (
          <section className="card">
            <h2 className="text-xl font-semibold mb-3">Destinations</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {destinations.filter(d=>d.city===city).map(d => (
                <div className="card" key={d.id}>
                  <h3 className="text-lg font-semibold">{d.name}</h3>
                  <p className="text-slate-600 mb-2">{d.description}</p>
                  <button className="btn" onClick={()=>setProfile({...profile, destination:d.id})}>
                    {profile.destination===d.id? 'Selected' : 'Select as my destination'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {active==='accepted' && (
          <section className="card">
            <h2 className="text-xl font-semibold mb-2">What Bottles We Collect</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="card">
                <h3 className="font-semibold mb-1">Accepted</h3>
                <ul className="list-disc pl-5 text-slate-700">
                  <li>Plastic beverage bottles (deposit-marked, 100 ml – 5 L)</li>
                  <li>Glass beverage bottles (deposit-marked, 100 ml – 5 L)</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-1">Not Accepted (v1)</h3>
                <ul className="list-disc pl-5 text-slate-700">
                  <li>Metal cans</li>
                  <li>Milk/dairy beverage containers</li>
                  <li>Cartons, pouches, bags</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
