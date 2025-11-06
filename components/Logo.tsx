import React from 'react';

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25L4.5 5.25v5.03c0 4.81 3.26 9.17 7.5 10.47 4.24-1.3 7.5-5.66 7.5-10.47V5.25L12 2.25z M9 10.5l3-3 3 3-3-1.5-3 1.5z M9 13.5l3-3 3 3-3-1.5-3 1.5z"
      />
    </svg>
  );
};