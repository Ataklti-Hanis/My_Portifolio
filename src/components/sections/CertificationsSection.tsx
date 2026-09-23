import { Award, ShieldAlert, ExternalLink } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { certificationsData } from '../../data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-100/50 dark:bg-tech-cardDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Credentials & Certifications"
          title="Professional Certifications"
          subtitle="Data-driven certification tracking component. Verified credential IDs and verification URLs are updated upon issue."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <Card key={cert.id} className="p-6 flex flex-col justify-between border-slate-200 dark:border-slate-800">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <Badge variant="warning" icon={<ShieldAlert className="w-3.5 h-3.5" />}>
                    Pending Details
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mt-1">
                    Provider: {cert.provider}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 space-y-1">
                  <div>Date: {cert.issueDate}</div>
                  <div>Credential ID: {cert.credentialId}</div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-amber-600 dark:text-amber-400 font-mono font-medium">
                  {cert.status}
                </span>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-600 hover:text-brand-500 flex items-center gap-1 font-semibold"
                  >
                    Verify <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">
                    No link
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
