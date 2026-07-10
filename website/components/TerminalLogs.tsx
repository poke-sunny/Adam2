use client;
import React, { useEffect, useState } from 'react';

export default function TerminalLogs() {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    const id = setInterval(() => {
      const newLine = `${new Date().toLocaleTimeString()} - Initializing edge pipeline...`;
      setLines(l => [newLine, ...l].slice(0, 15));
    }, 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{background:'#0a0a0a',color:'#00D980',padding:'1rem',borderRadius:'4px',height:'200px',overflowY:'auto',fontFamily:'monospace',fontSize:'0.85rem'}}>
      {lines.map((line,i)=><div key={i}>{line}</div>)}
    </div>
  );
}
