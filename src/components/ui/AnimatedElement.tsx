import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  className = ''
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setShouldAnimate(true);
      return;
    }

    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const animationClasses = {
    fadeIn: shouldAnimate ? 'opacity-100' : 'opacity-0',
    slideUp: shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    slideInLeft: shouldAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    slideInRight: shouldAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    scaleIn: shouldAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  };

  const transitionStyle = {
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  );
};