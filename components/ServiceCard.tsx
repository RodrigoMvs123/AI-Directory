import React from 'react';
import { Service } from '../types';
import { ExternalLink, Tag } from 'lucide-react';
import { CopyButton } from './CopyButton';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative flex flex-col h-full bg-claude-card dark:bg-dark-card border border-claude-border dark:border-dark-border rounded-xl p-5 hover:shadow-lg hover:border-claude-accent/30 dark:hover:border-claude-accent/30 transition-all duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {service.categories.map((cat) => (
              <span key={cat} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-claude-bg dark:bg-dark-bg text-claude-text dark:text-gray-300 border border-claude-border dark:border-dark-border">
                {cat}
              </span>
            ))}
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
              service.pricing.type === 'Free' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800' :
              service.pricing.type === 'Paid' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800' :
              'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'
            }`}>
              {service.pricing.type}
            </span>
          </div>
          <a href={service.url} target="_blank" rel="noopener noreferrer" className="block">
            <h3 className="text-xl font-serif font-semibold text-claude-text dark:text-dark-text group-hover:text-claude-accent transition-colors">
              {service.name}
            </h3>
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-500 dark:text-gray-500 flex items-start">
              <span className="mr-1.5 mt-0.5 block w-1 h-1 rounded-full bg-claude-accent/50 shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Installation Snippet (if CLI) */}
      {service.installation && (
        <div className="mb-4 bg-claude-bg dark:bg-black/30 rounded-lg p-2 flex items-center justify-between border border-claude-border dark:border-dark-border group-hover:border-claude-accent/20 transition-colors">
          <code className="text-xs font-mono text-gray-700 dark:text-gray-300 truncate mr-2">
            {service.installation.command}
          </code>
          <CopyButton text={service.installation.command} />
        </div>
      )}

      {/* Footer Actions */}
      <div className="pt-4 mt-auto border-t border-claude-border dark:border-dark-border flex items-center justify-between">
         <div className="flex items-center gap-2">
            {service.pricing.details && (
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {service.pricing.details}
                </span>
            )}
         </div>
        <a 
          href={service.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-claude-text dark:text-dark-text hover:text-claude-accent dark:hover:text-claude-accent transition-colors"
        >
          Visit
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};
