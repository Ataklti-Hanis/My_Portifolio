import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { blogPostsData, blogCategories } from '../../data/blog';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPostsData
    : blogPostsData.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-slate-100/50 dark:bg-tech-cardDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Technical Writing & Insights"
          title="Engineering Blog"
          subtitle="Articles, network design notes, full-stack architectural patterns, and Linux administration."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="p-6 flex flex-col justify-between border-slate-200 dark:border-slate-800 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="brand" icon={<Tag className="w-3 h-3" />}>
                    {post.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>

                <Link to={`/blog/${post.slug}`}>
                  <Button size="sm" variant="ghost" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
                    Read Article
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
