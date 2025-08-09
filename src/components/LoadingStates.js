// Skeleton loading components for different sections

export const ProjectCardSkeleton = () => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 shadow-xl animate-pulse">
    <div className="p-6 sm:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8">
      {/* Content Section Skeleton */}
      <div className="flex-1 space-y-5 sm:space-y-7">
        <div className="space-y-3 sm:space-y-5">
          {/* Title skeleton */}
          <div className="h-8 bg-zinc-800 rounded-lg animate-shimmer"></div>
          
          {/* Description skeleton */}
          <div className="space-y-3">
            <div className="h-4 bg-zinc-800 rounded animate-shimmer"></div>
            <div className="h-4 bg-zinc-800 rounded w-4/5 animate-shimmer"></div>
            <div className="h-4 bg-zinc-800 rounded w-3/5 animate-shimmer"></div>
          </div>
        </div>
        
        {/* Action Links skeleton */}
        <div className="flex items-center gap-4 sm:gap-6 pt-2">
          <div className="h-6 w-24 bg-zinc-800 rounded animate-shimmer"></div>
          <div className="h-6 w-20 bg-zinc-800 rounded animate-shimmer"></div>
        </div>
      </div>
      
      {/* Media Container Skeleton */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800 animate-shimmer"></div>
      </div>
    </div>
  </div>
);

export const SkillIconSkeleton = () => (
  <div className="flex flex-col items-center group">
    <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 shadow-xl backdrop-blur-sm animate-pulse">
      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-zinc-800 rounded animate-shimmer"></div>
    </div>
    <div className="mt-3 sm:mt-4 h-4 w-16 bg-zinc-800 rounded animate-shimmer"></div>
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 sm:p-10 animate-pulse">
    <div className="w-8 h-8 bg-zinc-800 rounded mb-6 animate-shimmer"></div>
    
    {/* Testimonial Text skeleton */}
    <div className="space-y-4 mb-8">
      <div className="h-6 bg-zinc-800 rounded animate-shimmer"></div>
      <div className="h-6 bg-zinc-800 rounded w-4/5 animate-shimmer"></div>
      <div className="h-6 bg-zinc-800 rounded w-3/5 animate-shimmer"></div>
    </div>
    
    {/* Author Info skeleton */}
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-zinc-800 animate-shimmer"></div>
      <div className="space-y-2">
        <div className="h-4 w-24 bg-zinc-800 rounded animate-shimmer"></div>
        <div className="h-3 w-20 bg-zinc-800 rounded animate-shimmer"></div>
        <div className="h-3 w-28 bg-zinc-800 rounded animate-shimmer"></div>
      </div>
    </div>
    
    {/* Skills skeleton */}
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-6 w-16 bg-zinc-800 rounded-full animate-shimmer"></div>
      ))}
    </div>
  </div>
);

export const PageLoadingSpinner = () => (
  <div className="fixed inset-0 bg-white dark:bg-zinc-950 flex items-center justify-center z-50">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-3 border-gray-200 dark:border-zinc-700 rounded-full"></div>
      <div className="absolute inset-0 border-3 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Hook for managing loading states
import { useState, useEffect } from 'react';

export const useLoadingState = (delay = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return isLoading;
};