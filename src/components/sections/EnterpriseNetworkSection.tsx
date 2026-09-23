import { Network, Server, ShieldCheck, Terminal } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { EnterpriseTopologyDiagram } from '../visual/EnterpriseTopologyDiagram';

export const EnterpriseNetworkSection: React.FC = () => {
  const techStack = [
    "Huawei S5720",
    "CloudCampus",
    "VLAN",
    "Routing",
    "Switching",
    "VLANIF",
    "ARP Troubleshooting",
    "VTY Access Control",
    "Linux",
    "VMware"
  ];

  return (
    <section id="network-infrastructure" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background radial network mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <Network className="w-3.5 h-3.5" /> Enterprise Network Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Enterprise Network Infrastructure
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Designing, configuring, and supporting nationwide cloud network infrastructure for 300+ schools and 10 public universities using Huawei enterprise hardware and CloudCampus solutions.
          </p>
        </div>

        {/* Interactive Network Diagram */}
        <div className="mb-12">
          <EnterpriseTopologyDiagram />
        </div>

        {/* Technical Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverEffect glowEffect className="p-6 bg-slate-900/80 border-slate-800 text-slate-200">
            <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 w-fit mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              300+ Primary/Secondary Schools
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Configured Huawei access layer switching, VLAN isolation for administrative and student subnets, and remote network telemetry across regional primary and secondary institutions.
            </p>
          </Card>

          <Card hoverEffect glowEffect className="p-6 bg-slate-900/80 border-slate-800 text-slate-200">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              10 Public Universities
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineered high-throughput campus backbones using Huawei S5720 core switches, inter-VLAN VLANIF interfaces, static/dynamic routing protocols, and VMware virtual server clusters.
            </p>
          </Card>

          <Card hoverEffect glowEffect className="p-6 bg-slate-900/80 border-slate-800 text-slate-200">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              VTY Security & Troubleshooting
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Implemented strict VTY access control profiles, SSH management rules, ARP storm protection, address conflict diagnostics, and 24/7 enterprise infrastructure maintenance.
            </p>
          </Card>
        </div>

        {/* Interactive Technology Stack Pills */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-brand-400" /> Infrastructure Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="accent" className="font-mono text-xs py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
