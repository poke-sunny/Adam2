"use client";

import React, { useEffect, useState } from "react";
import TelemetryBoard from "../../components/TelemetryBoard";
import TerminalLogs from "../../components/TerminalLogs";
import Link from "next/link";

export default function MissionControl() {
  const [latency, setLatency] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 15) + 35);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      style={{ backgroundColor: "#13161A", minHeight: "100vh", color: "#FFFFFF", fontFamily: "'Inter Variable', sans-serif" }} 
      className="p-6 md:p-12 selection:bg-[#00D980]/20 font-medium tracking-[-1.056px]"
    >
      {/* Header Banner */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border border-[#00D980]/20 bg-[#13161A] p-4 rounded mb-8">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D980] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D980]"></span>
          </span>
          <h1 className="text-xl font-medium tracking-tight text-[#00D980]">
            AI ORCHESTRATION ACTIVE
          </h1>
        </div>
        <div className="mt-2 md:mt-0 flex gap-6 text-xs text-[#00D980]/70 font-mono tnum">
          <div>LATENCY: {latency}MS</div>
          <div>NODE: EU-WEST-1</div>
          <div>STATUS: NOMINAL</div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TelemetryBoard />
        <TerminalLogs />
      </div>

      {/* Navigation */}
      <footer className="mt-12 flex justify-between items-center text-sm">
        <Link href="/" className="text-[#00D980] hover:underline flex items-center gap-2">
          ← Return to Cockpit
        </Link>
        <span className="text-xs text-[#FFFFFF]/30 font-mono">PROJECT F1 v1.0.0</span>
      </footer>
    </div>
  );
}
