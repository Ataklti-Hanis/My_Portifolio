import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Home } from 'lucide-react';
import { PageContainer } from '../components/ui/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-24 min-h-screen flex items-center justify-center">
      <PageContainer size="narrow">
        <Card className="p-10 border-slate-200 dark:border-slate-800 text-center space-y-6">
          <div className="p-4 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 w-fit mx-auto">
            <Network className="w-12 h-12" />
          </div>

          <div>
            <span className="text-4xl font-mono font-black text-brand-600 dark:text-brand-400 block mb-2">
              404 — Route Not Found
            </span>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Destination Unreachable
            </h1>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            The route or resource packet you are looking for does not exist or has been relocated.
          </p>

          <div className="pt-4 flex justify-center gap-3">
            <Link to="/">
              <Button variant="primary" icon={<Home className="w-4 h-4" />}>
                Return Home
              </Button>
            </Link>
          </div>
        </Card>
      </PageContainer>
    </div>
  );
};
