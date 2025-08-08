import React, { useMemo, useState } from 'react'
import Nav from './components/Nav.jsx'

export default function App(){
  const [active, setActive] = useState('home')
  return (
    <div>
      <Nav active={active} setActive={setActive} />
      <main className="container-narrow py-6 space-y-6">
        {active==='home' && <Home setActive={setActive} />}
        {active==='windows' && <Placeholder title="Collection Windows" />}
        {active==='destinations' && <Placeholder title="Destinations" />}
        {active==='accepted' && <Accepted />}
        {active==='reference' && <Placeholder title="Bottle Reference" />}
        {active==='impact' && <Placeholder title="My Impact" />}
        {active==='leaderboard' && <Placeholder title="Leaderboard" />}
        {active==='admin' && <Placeholder title="Admin" />}
      </main>
    </div>
  )
}

function Home({ setActive }){
  return (
    <section className="space-y-4">
      <div className="hero">
        <h1 className="text-3xl font-bold">Turn bottles into donations</h1>
        <p className="text-slate-600 mt-1">Even Yehuda pilot • 2‑hour pickup windows • ₪0.30 per bottle • Even split across your chosen destinations</p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <button className="btn btn-primary" onClick={()=>setActive('windows')}>See Collection Times</button>
          <button className="btn" onClick={()=>setActive('destinations')}>Choose My Destination</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">City & Settings</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <KPI label="Per bottle (city)" value="₪0.30" />
            <KPI label="Pickup window" value="2 hrs" />
            <KPI label="Split method" value="Even Split" />
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <div className="text-slate-600 text-sm">Display Name</div>
          <div>RecyclingFan42 <span className="pill ml-1">anonymous ok</span></div>
          <div className="text-slate-600 text-sm mt-2">Address</div>
          <div>123 Herzl St, Even Yehuda</div>
          <div className="text-slate-600 text-sm mt-2">Preferred Destination</div>
          <div>WBAIS</div>
        </div>
      </div>
    </section>
  )
}

function KPI({label, value}){
  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-slate-600">{label}</div>
    </div>
  )
}

function Accepted(){
  return (
    <section className="card">
      <h2 className="text-xl font-semibold mb-2">What Bottles We Collect</h2>
      <p className="text-slate-700">We collect refundable beverage bottles covered by Israel’s Deposit Law. Each eligible bottle is worth ₪0.30 when returned. Place them outside in any container before your pickup window starts. Containers will not be returned.</p>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold">Accepted</h3>
          <ul className="list-disc list-inside text-slate-700 mt-1">
            <li>Plastic beverage bottles (deposit-marked, 100 ml – 5 L)</li>
            <li>Glass beverage bottles (deposit-marked, 100 ml – 5 L)</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">Not Accepted (v1)</h3>
          <ul className="list-disc list-inside text-slate-700 mt-1">
            <li>Metal cans</li>
            <li>Milk/dairy beverage containers</li>
            <li>Cartons, pouches, bags</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Placeholder({title}){
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-slate-600 mt-2">This section will be implemented next.</p>
    </section>
  )
}
