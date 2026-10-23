import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official WhatsApp icon component rendering the genuine WhatsApp emblem
 * provided by the user (/assets/aistudio/IMG_1984_19de7290.jpeg)
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-10 h-10'
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 select-none ${sizeClasses[size]} ${className}`}
      aria-label="WhatsApp"
    >
      <img
        src="/assets/aistudio/IMG_1984_19de7290.jpeg"
        alt="WhatsApp"
        className="w-full h-full object-cover scale-[1.48]"
      />
    </span>
  );
};

/**
 * Pure SVG vector of the genuine WhatsApp emblem for precise inline stroke rendering
 */
export const WhatsAppSvg: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    <path
      d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.953 1.181-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.244-.588-.492-.508-.677-.518l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.087 1.782-.728 2.032-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351z"
      fill="#FFFFFF"
    />
  </svg>
);

export default WhatsAppIcon;
