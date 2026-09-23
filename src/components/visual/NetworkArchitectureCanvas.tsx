import React, { useEffect, useRef } from 'react';
import { Server, Cloud, Cpu, Database, Network, ShieldCheck } from 'lucide-react';

export const NetworkArchitectureCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 500;
      height = canvas.height = canvas.parentElement?.clientHeight || 400;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic Network Nodes
    const nodes = [
      { id: 'cloud', x: width * 0.5, y: height * 0.18, label: 'Higher Ed Cloud', type: 'cloud' },
      { id: 'core', x: width * 0.5, y: height * 0.45, label: 'Huawei S5720 Core', type: 'core' },
      { id: 'db', x: width * 0.82, y: height * 0.45, label: 'PostgreSQL Cluster', type: 'db' },
      { id: 'server', x: width * 0.18, y: height * 0.45, label: 'NestJS App Server', type: 'server' },
      { id: 'schools', x: width * 0.28, y: height * 0.78, label: '300+ Schools Net', type: 'access' },
      { id: 'universities', x: width * 0.72, y: height * 0.78, label: '10 Universities', type: 'access' },
    ];

    const connections = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 1, to: 5 },
      { from: 3, to: 2 },
    ];

    // Animated Data Packets
    const packets = connections.map((conn) => ({
      from: conn.from,
      to: conn.to,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const lineColor = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.2)';
      const packetColor = isDark ? '#38bdf8' : '#0284c7';
      const nodeBg = isDark ? '#131b2e' : '#ffffff';
      const nodeBorder = isDark ? '#1e293b' : '#e2e8f0';
      const textColor = isDark ? '#94a3b8' : '#475569';

      // 1. Draw Connections
      connections.forEach((conn) => {
        const n1 = nodes[conn.from];
        const n2 = nodes[conn.to];

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Animate Data Packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = packetColor;
        ctx.shadowColor = packetColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw Nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = nodeBg;
        ctx.strokeStyle = nodeBorder;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        ctx.font = '500 11px Inter, sans-serif';
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 32);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-slate-100/70 dark:bg-tech-cardDark/60 border border-slate-200 dark:border-tech-borderDark p-4 overflow-hidden backdrop-blur-sm shadow-xl">
      {/* Top Status Indicators */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Huawei VRP & Full-Stack Node Active
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-[11px] font-medium text-brand-600 dark:text-brand-400 border border-brand-500/20">
          <ShieldCheck className="w-3.5 h-3.5" /> 300+ Schools & 10 Unis Connected
        </div>
      </div>

      {/* HTML Icon Overlays matching canvas coordinates */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[50%] top-[18%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
          <Cloud className="w-5 h-5" />
        </div>
        <div className="absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Network className="w-5 h-5" />
        </div>
        <div className="absolute left-[18%] top-[45%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Server className="w-5 h-5" />
        </div>
        <div className="absolute left-[82%] top-[45%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Database className="w-5 h-5" />
        </div>
        <div className="absolute left-[28%] top-[78%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="absolute left-[72%] top-[78%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
          <Network className="w-5 h-5" />
        </div>
      </div>

      {/* Canvas Element */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
