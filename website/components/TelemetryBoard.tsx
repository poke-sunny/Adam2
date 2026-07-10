use client;
import React, { useEffect, useState } from 'react';

interface Telemetry { speed: number; rpm: number; gForce: number; lapTime: number; }

export default function TelemetryBoard() {
  const [data, setData] = useState<Telemetry>({ speed: 0, rpm: 0, gForce: 0, lapTime: 0 });
  const format = (n:number)=>n.toLocaleString(undefined,{maximumFractionDigits:2});
  useEffect(()=>{
    const id=setInterval(()=>{
      setData(prev=>({
        speed: Math.min(prev.speed+Math.random()*5,350),
        rpm: Math.min(prev.rpm+Math.random()*200,15000),
        gForce: Math.min(prev.gForce+Math.random()*0.05,5),
        lapTime: prev.lapTime+0.01
      }));
    },1000);
    return()=>clearInterval(id);
  },[]);
  return (
    <div style={{background:'#13161A',color:'#fff',padding:'1rem',borderRadius:'4px'}}>
      <h2 style={{color:'#00D980'}}>Telemetry Board</h2>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <tbody>
          <tr><td>Speed (km/h)</td><td style={{textAlign:'right'}}>{format(data.speed)}</td></tr>
          <tr><td>RPM</td><td style={{textAlign:'right'}}>{format(data.rpm)}</td></tr>
          <tr><td>G‑Force</td><td style={{textAlign:'right'}}>{format(data.gForce)}</td></tr>
          <tr><td>Lap Time (s)</td><td style={{textAlign:'right'}}>{format(data.lapTime)}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
