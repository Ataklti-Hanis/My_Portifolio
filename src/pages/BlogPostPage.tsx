import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { blogPostsData } from '../data/blog';
import { PageContainer } from '../components/ui/PageContainer';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <PageContainer size="narrow">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-brand-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        <Card className="p-8 sm:p-12 border-slate-200 dark:border-slate-800 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="brand" icon={<Tag className="w-3 h-3" />}>
                {post.category}
              </Badge>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-brand-500" /> {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-sm space-y-4 whitespace-pre-line font-normal">
            {post.content}
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                #{tag}
              </span>
            ))}
          </div>
        </Card>
      </PageContainer>
    </div>
  );
};
