import React from 'react';
import { clsx } from 'clsx';
import type { CTAButtonProps } from '../../types';

const Button: React.FC<CTAButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 hover:-translate-y-0.5 hover:shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 