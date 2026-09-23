import React, { useState } from 'react';
import { Network, Globe, Server, School, GraduationCap, Users, Shield, Cpu, Terminal } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const EnterpriseTopologyDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('core');

  const nodeDetails: Record<string, { title: string; subtitle: string; specs: string[] }> = {
    internet: {
      title: "WAN & Internet Gateway",
      subtitle: "Secure enterprise gateway connecting to Ministry Data Centers & public internet.",
      specs: ["Redundant Gateway Uplinks", "BGP / Static Gateway Routing", "Enterprise Firewall Isolation"]
    },
    core: {
      title: "Huawei S5720 Core Network",
      subtitle: "Central High-Density Layer 3 Core Switching & Routing Node.",
      specs: ["Huawei VRP OS Configuration", "VLANIF Inter-VLAN Interfaces", "VTY Access Controls & ARP Protection", "Gigabit & 10G Fiber Uplinks"]
    },
    schools: {
      title: "Nationwide SchoolNet (300+ Schools)",
      subtitle: "Primary and Secondary educational digital infrastructure across regional zones.",
      specs: ["Access Switch Segmentation", "VLAN Isolation for Labs & Staff", "Huawei CloudCampus Remote Monitoring"]
    },
    universities: {
      title: "Higher Education Campus Net (10 Public Universities)",
      subtitle: "Large-scale university enterprise campus backbone and data center connectivity.",
      specs: ["Multi-building Fiber Ring Topology", "High-density VMware Virtualization Host Connections", "DHCP Relay & Dynamic ARP Inspection"]
    },
  };

  return (
    <div className="w-full space-y-8">
      {/* Top Architecture Diagram Card */}
      <Card className="p-6 sm:p-8 bg-slate-900 text-slate-100 border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="accent" icon={<Network className="w-3.5 h-3.5" />}>
              Topology Diagram: SchoolNet & University Infrastructure
            </Badge>
          </div>

          {/* Level 1: Internet */}
          <button
            onClick={() => setActiveNode('internet')}
            className={`flex flex-col items-center p-3 rounded-xl border transition-all cursor-pointer ${
              activeNode === 'internet'
                ? 'bg-sky-500/20 border-sky-400 text-sky-300 ring-2 ring-sky-500/30'
                : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-300'
            }`}
          >
            <Globe className="w-6 h-6 text-sky-400 mb-1" />
            <span className="text-xs font-semibold uppercase tracking-wider">Internet / WAN</span>
          </button>

          {/* Line */}
          <div className="w-0.5 h-8 bg-sky-500/40 my-1 animate-pulse" />

          {/* Level 2: Core Network */}
          <button
            onClick={() => setActiveNode('core')}
            className={`flex flex-col items-center px-6 py-3.5 rounded-xl border transition-all cursor-pointer ${
              activeNode === 'core'
                ? 'bg-brand-500/20 border-brand-400 text-brand-300 ring-2 ring-brand-500/30'
                : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-300'
            }`}
          >
            <Server className="w-7 h-7 text-brand-400 mb-1" />
            <span className="text-sm font-bold tracking-tight">Core Network (Huawei S5720)</span>
            <span className="text-[11px] text-slate-400">VLANIF • Routing • VTY • CloudCampus</span>
          </button>

          {/* Branch Lines */}
          <div className="w-full max-w-lg flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-brand-500/40" />
            <div className="w-3/4 sm:w-2/3 h-0.5 bg-slate-700 relative">
              <div className="absolute left-0 top-0 w-0.5 h-4 bg-emerald-500/40" />
              <div className="absolute right-0 top-0 w-0.5 h-4 bg-indigo-500/40" />
            </div>
          </div>

          {/* Level 3: Schools & Universities */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {/* Left Branch: Schools */}
            <button
              onClick={() => setActiveNode('schools')}
              className={`flex flex-col items-center p-4 rounded-xl border transition-all cursor-pointer ${
                activeNode === 'schools'
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 ring-2 ring-emerald-500/30'
                  : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-300'
              }`}
            >
              <School className="w-6 h-6 text-emerald-400 mb-1" />
              <span className="text-sm font-semibold">300+ Primary & Secondary Schools</span>
              <span className="text-xs text-slate-400 mt-1">Access Network Layer</span>
              <div className="w-0.5 h-3 bg-emerald-500/30 my-1" />
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <Users className="w-3 h-3" /> End Users (Students & Staff)
              </div>
            </button>

            {/* Right Branch: Universities */}
            <button
              onClick={() => setActiveNode('universities')}
              className={`flex flex-col items-center p-4 rounded-xl border transition-all cursor-pointer ${
                activeNode === 'universities'
                  ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 ring-2 ring-indigo-500/30'
                  : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-300'
              }`}
            >
              <GraduationCap className="w-6 h-6 text-indigo-400 mb-1" />
              <span className="text-sm font-semibold">10 Public Universities</span>
              <span className="text-xs text-slate-400 mt-1">Higher Ed Campus Network</span>
              <div className="w-0.5 h-3 bg-indigo-500/30 my-1" />
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <Users className="w-3 h-3" /> End Users (Faculty & Researchers)
              </div>
            </button>
          </div>
        </div>
      </Card>

      {/* Interactive Selected Node Specs Panel */}
      {activeNode && nodeDetails[activeNode] && (
        <Card className="p-6 bg-slate-100 dark:bg-tech-cardDark border-brand-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {nodeDetails[activeNode].title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {nodeDetails[activeNode].subtitle}
              </p>
            </div>
            <Badge variant="brand" icon={<Shield className="w-3.5 h-3.5" />}>
              Enterprise Spec
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {nodeDetails[activeNode].specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                <Cpu className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
