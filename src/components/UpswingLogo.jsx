import React, { useId } from 'react';

/**
 * UpswingLogo — Bespoke Premium Aero-Surge Brand Identity System
 *
 * Modern luxury agency mark:
 * - Standalone sculpted vector monogram (unconstrained by dark squircle boxes)
 * - Fluid geometric 'U' foundation seamlessly launching into a +45° soaring flight arrow
 * - Radiant copper/electric orange gradient with subtle aerodynamic depth feather
 * - Clean, authoritative typographic lockup in Plus Jakarta Sans & Inter
 *
 * @param {'full'|'mark'|'horizontal'} variant - Logo layout variant
 * @param {'sm'|'md'|'lg'|'xl'|number} size - Visual size preset or pixel count
 * @param {boolean} animated - Hover micro-interaction glow
 * @param {string} className - Additional CSS class names
 */
export default function UpswingLogo({
  variant = 'full',
  size = 'md',
  animated = true,
  className = ''
}) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  const sizeMap = {
    sm: { icon: 30, text: '1.15rem', sub: '0.58rem' },
    md: { icon: 38, text: '1.32rem', sub: '0.66rem' },
    lg: { icon: 48, text: '1.65rem', sub: '0.75rem' },
    xl: { icon: 58, text: '2.0rem', sub: '0.85rem' }
  };

  const currentSize = typeof size === 'number'
    ? { icon: size, text: `${size * 0.035}rem`, sub: `${size * 0.018}rem` }
    : (sizeMap[size] || sizeMap.md);

  return (
    <div
      className={`upswing-brand-lockup upswing-variant-${variant} ${animated ? 'upswing-animated' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'mark' ? 0 : '0.75rem',
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {/* Precision Aero-Surge Vector Emblem */}
      <div
        className="upswing-mark-wrapper"
        style={{
          width: currentSize.icon,
          height: currentSize.icon,
          flexShrink: 0,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="upswing-svg"
          aria-hidden="true"
        >
          <defs>
            {/* Luminous Copper to Electric Orange Foundation Gradient */}
            <linearGradient id={`uGradStem_${id}`} x1="6" y1="38" x2="26" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C2410C" />
              <stop offset="60%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#FF6B2C" />
            </linearGradient>

            {/* Ascending Flight Arrow Gradient */}
            <linearGradient id={`uGradArrow_${id}`} x1="16" y1="36" x2="40" y2="6" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="50%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FED7AA" />
            </linearGradient>

            {/* Ambient Vector Glow */}
            <filter id={`uGlow_${id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3.2" floodColor="#FF6B2C" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Sculpted Foundation & Left Stem of U */}
          <path
            d="M8 8V25C8 32 13.5 37.5 20.5 37.5C22.8 37.5 25 36.8 26.8 35.6L23.8 30.6C22.8 31.2 21.7 31.5 20.5 31.5C16.9 31.5 14 28.6 14 25V8H8Z"
            fill={`url(#uGradStem_${id})`}
          />

          {/* Main Flight Arrow Vector (+45° Launch) */}
          <path
            d="M20.5 31.5L38 8M38 8H26M38 8V20"
            stroke={`url(#uGradArrow_${id})`}
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#uGlow_${id})`}
          />

          {/* Aerodynamic Trailing Feather (Motion & Lift) */}
          <path
            d="M28 27L37 16"
            stroke="#FDBA74"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Typographic Lockup */}
      {variant !== 'mark' && (
        <div
          className="upswing-typography-stack"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            lineHeight: 1
          }}
        >
          <span
            className="upswing-wordmark"
            style={{
              fontFamily: 'var(--font-heading, "Plus Jakarta Sans", sans-serif)',
              fontSize: currentSize.text,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              lineHeight: 1.12
            }}
          >
            UPSWING
          </span>

          <span
            className="upswing-submark"
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: currentSize.sub,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--accent-orange, #FF6B2C)',
              marginTop: '2.5px',
              lineHeight: 1
            }}
          >
            AGENCY
          </span>
        </div>
      )}
    </div>
  );
}
