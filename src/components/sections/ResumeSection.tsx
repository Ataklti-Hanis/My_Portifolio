import React, { useState } from 'react';
import { FileText, Download, Eye, ShieldCheck, FileCheck } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { profileData } from '../../data/profile';

export const ResumeSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const resumePdfPath = "/documents/resume.pdf";

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Curriculum Vitae"
          title="My Resume"
          subtitle="Download my latest professional resume to learn more about my experience, education, technical skills, and projects."
        />

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 sm:p-10 border-slate-200 dark:border-slate-800 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {profileData.name} — Curriculum Vitae
              </h3>
              <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mt-1">
                {profileData.title}
              </p>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Download my latest professional resume to learn more about my experience in nationwide network deployment (300+ schools, 10 universities), full-stack development with React & NestJS, and academic achievements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href={resumePdfPath} download="Ataklti_Hanis_CV.pdf">
                <Button variant="primary" size="lg" icon={<Download className="w-4 h-4" />}>
                  Download CV
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                icon={<Eye className="w-4 h-4" />}
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Hide CV Preview" : "View CV"}
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Privacy Protected
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FileCheck className="w-4 h-4 text-brand-500" /> Verified Credentials
              </span>
            </div>
          </Card>

          {/* Inline PDF Preview Frame */}
          {showPreview && (
            <Card className="mt-8 p-4 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                  CV Document Viewer
                </span>
                <Badge variant="brand">PDF Preview</Badge>
              </div>

              <div className="w-full h-[550px] bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
                <object
                  data={resumePdfPath}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="p-8 text-center text-slate-300 space-y-4">
                    <FileText className="w-12 h-12 text-brand-400 mx-auto" />
                    <p className="text-sm">
                      PDF preview frame ready. To replace with your custom resume, place your PDF at:
                    </p>
                    <code className="text-xs bg-slate-800 px-3 py-1.5 rounded font-mono text-cyan-300 block">
                      /public/documents/resume.pdf
                    </code>
                    <a href={resumePdfPath} download className="inline-block mt-2">
                      <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                        Download Directly
                      </Button>
                    </a>
                  </div>
                </object>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
