import React from 'react';
import { Cpu, CheckCircle2, Radio, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { profileData } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-tech-cardDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Professional Overview"
          title="Bridging Network Infrastructure & Software Engineering"
          subtitle="Combining hands-on enterprise networking, mission-critical eLTE communications, and full-stack web application development."
        />

        {/* Top 5 Key Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {profileData.metrics.map((metric, i) => (
            <Card key={i} className="p-5 text-center flex flex-col justify-between border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-brand-600 dark:text-brand-400 block font-mono">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                  {metric.label}
                </span>
              </div>
              {metric.description && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-light">
                  {metric.description}
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Main Content & Interest Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-8 border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Engineering & Development Profile
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {profileData.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                My hands-on experience includes mission-critical network deployments such as the <strong className="text-slate-900 dark:text-white">Addis Ababa Police Commission eLTE Project</strong> for mission-critical wireless communications infrastructure (CLI configuration, network deployment, and data transmission optimization), alongside nationwide SchoolNet and Higher Education cloud network infrastructure across 300+ primary/secondary schools and 10 public universities.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                I work extensively with Huawei networking solutions (S5720 core and access switches, CloudCampus management platform), VLAN segmentation, inter-VLAN routing (VLANIF), ARP troubleshooting, VTY security access, Linux administration, and VMware virtual environments.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                Simultaneously, I architect full-stack web applications utilizing modern tools like React, TypeScript, Node.js, NestJS, and PostgreSQL, focusing on reliable data normalization, security, and responsive UI design.
              </p>
            </Card>
          </div>

          {/* Areas of Interest Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              Core Areas of Technical Interest
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profileData.interests.map((interest) => (
                <div
                  key={interest}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-tech-cardDark border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>

            {/* Dedicated Mission-Critical eLTE Highlight Card */}
            <Card className="p-6 bg-slate-900 text-white border-brand-500/30 relative overflow-hidden group">
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 shrink-0">
                  <Radio className="w-6 h-6 animate-pulse text-brand-400" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Mission-Critical Infrastructure
                  </span>
                  <h4 className="font-extrabold text-base text-white">
                    Addis Ababa Police Commission eLTE Project
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Contributed to network deployment and CLI configuration for mission-critical wireless communications infrastructure, optimizing data transmission, network performance, and secure communications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-brand-900/90 to-slate-900 text-white border-brand-800 mt-4">
              <h4 className="font-bold text-base text-brand-300 mb-2">
                Dual Engineering Advantage
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                By understanding both the underlying physical/wireless network layer (eLTE, IP routing, VLANs, CLI configuration) and the application software layer (APIs, databases, state management), I deliver robust full-stack solutions built for reliability and scale.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
