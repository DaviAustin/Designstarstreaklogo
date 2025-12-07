export function StarstreakLogo() {
  return (
    <div className="w-full max-w-7xl space-y-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-emerald-400">Starstreak</h1>
        <p className="text-slate-500">Premium Tech · Aerospace Precision</p>
      </div>

      {/* Variation 1: Icon Only */}
      <div className="space-y-6">
        <h2 className="text-emerald-300">Icon Only</h2>
        <div className="bg-neutral-950 rounded-2xl p-20 flex items-center justify-center border border-neutral-900">
          <IconOnly size={240} />
        </div>
      </div>

      {/* Variation 2: Icon + Wordmark */}
      <div className="space-y-6">
        <h2 className="text-emerald-300">Icon + Wordmark</h2>
        <div className="bg-neutral-950 rounded-2xl p-20 flex items-center justify-center border border-neutral-900">
          <IconWithWordmark width={600} />
        </div>
      </div>

      {/* Variation 3: App Icon */}
      <div className="space-y-6">
        <h2 className="text-emerald-300">App Icon (Tech Style)</h2>
        <div className="bg-neutral-950 rounded-2xl p-20 flex items-center justify-center border border-neutral-900">
          <div className="flex gap-12 items-center">
            <AppIcon size={256} />
            <AppIcon size={128} />
            <AppIcon size={64} />
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h2 className="text-emerald-300">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Light background */}
          <div className="bg-white rounded-2xl p-12 flex items-center justify-center">
            <IconOnly size={100} variant="dark" />
          </div>
          {/* Colored gradient */}
          <div className="bg-gradient-to-br from-neutral-900 to-emerald-950 rounded-2xl p-12 flex items-center justify-center">
            <IconOnly size={100} />
          </div>
          {/* Wordmark on dark */}
          <div className="bg-neutral-900 rounded-2xl p-12 flex items-center justify-center">
            <IconWithWordmark width={280} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon Only Component
function IconOnly({ size = 200, variant = 'light' }: { size?: number; variant?: 'light' | 'dark' }) {
  const isLight = variant === 'light';
  const strokeColor = isLight ? '#10b981' : '#0f172a';
  const fillColor = isLight ? '#10b981' : '#1e293b';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Premium gradient */}
        <linearGradient id={`premium-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
        </linearGradient>

        {/* Glow for light variant */}
        <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={isLight ? `url(#glow-${variant})` : 'none'}>
        {/* Main trajectory arc - elegant curve */}
        <path
          d="M 30 110 Q 80 90, 140 100"
          stroke={`url(#premium-${variant})`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Parallel trajectory line - thinner */}
        <path
          d="M 32 115 Q 82 96, 142 105"
          stroke={strokeColor}
          strokeWidth="0.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Micro-line tech detailing */}
        <g opacity="0.6">
          <line x1="60" y1="97" x2="62" y2="96" stroke={strokeColor} strokeWidth="0.5" />
          <line x1="90" y1="92" x2="92" y2="91.5" stroke={strokeColor} strokeWidth="0.5" />
          <line x1="110" y1="95" x2="112" y2="95" stroke={strokeColor} strokeWidth="0.5" />
        </g>

        {/* Geometric star at end - small and precise */}
        <g transform="translate(140, 100)">
          {/* Four-point diamond star */}
          <path
            d="M 0 -8 L 2.5 -2.5 L 8 0 L 2.5 2.5 L 0 8 L -2.5 2.5 L -8 0 L -2.5 -2.5 Z"
            fill={`url(#premium-${variant})`}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
          
          {/* Inner detail */}
          <path
            d="M 0 -4 L 1.5 -1.5 L 4 0 L 1.5 1.5 L 0 4 L -1.5 1.5 L -4 0 L -1.5 -1.5 Z"
            fill={isLight ? 'rgba(255,255,255,0.15)' : fillColor}
          />

          {/* Circuit-inspired micro lines from star */}
          <g opacity="0.5">
            <line x1="8" y1="0" x2="12" y2="0" stroke={strokeColor} strokeWidth="0.5" />
            <line x1="12" y1="0" x2="14" y2="-2" stroke={strokeColor} strokeWidth="0.5" />
            <line x1="12" y1="0" x2="14" y2="2" stroke={strokeColor} strokeWidth="0.5" />
          </g>
        </g>

        {/* Leading edge signal lines */}
        <g opacity="0.3">
          <line x1="25" y1="108" x2="20" y2="107" stroke={strokeColor} strokeWidth="0.5" strokeLinecap="round" />
          <line x1="27" y1="113" x2="22" y2="112.5" stroke={strokeColor} strokeWidth="0.5" strokeLinecap="round" />
        </g>

        {/* Circuit pattern elements - subtle */}
        <g opacity="0.25">
          <circle cx="75" cy="92" r="1" fill={strokeColor} />
          <circle cx="105" cy="94" r="0.8" fill={strokeColor} />
          <line x1="75" y1="92" x2="78" y2="93" stroke={strokeColor} strokeWidth="0.3" />
        </g>
      </g>
    </svg>
  );
}

// Icon with Wordmark Component
function IconWithWordmark({ width = 500 }: { width?: number }) {
  const height = width * 0.3;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wordmarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Icon */}
      <g transform="translate(20, 40)">
        <g transform="scale(0.65)">
          <IconPaths />
        </g>
      </g>

      {/* Wordmark - narrow, spaced typography */}
      <text
        x="170"
        y="105"
        fontFamily="'Inter Tight', 'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="48"
        fontWeight="600"
        letterSpacing="8"
        fill="url(#wordmarkGrad)"
      >
        STARSTREAK
      </text>

      {/* Subtle underline accent */}
      <line
        x1="170"
        y1="118"
        x2="280"
        y2="118"
        stroke="#10b981"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
}

// App Icon Component
function AppIcon({ size = 256 }: { size?: number }) {
  const cornerRadius = size * 0.225; // iOS style

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Dark premium background */}
        <linearGradient id="appBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0a0a0a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0f1410', stopOpacity: 1 }} />
        </linearGradient>

        {/* Radial accent */}
        <radialGradient id="radialAccent" cx="50%" cy="40%">
          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
        </radialGradient>

        {/* Icon gradient */}
        <linearGradient id="iconAppGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
        </linearGradient>

        {/* Subtle grid pattern */}
        <pattern id="gridPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="32" stroke="#10b981" strokeWidth="0.3" opacity="0.05" />
          <line x1="0" y1="0" x2="32" y2="0" stroke="#10b981" strokeWidth="0.3" opacity="0.05" />
        </pattern>
      </defs>

      {/* Background */}
      <rect
        width="256"
        height="256"
        rx={cornerRadius}
        fill="url(#appBg)"
      />

      {/* Grid pattern overlay */}
      <rect
        width="256"
        height="256"
        rx={cornerRadius}
        fill="url(#gridPattern)"
      />

      {/* Radial glow */}
      <ellipse cx="128" cy="100" rx="120" ry="100" fill="url(#radialAccent)" />

      {/* Border */}
      <rect
        width="256"
        height="256"
        rx={cornerRadius}
        fill="none"
        stroke="#10b981"
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* Icon centered */}
      <g transform="translate(28, 38)">
        <IconPaths />
      </g>

      {/* Micro-line circuit details in corners */}
      <g opacity="0.15">
        {/* Top right */}
        <line x1="220" y1="30" x2="230" y2="30" stroke="#10b981" strokeWidth="0.5" />
        <line x1="230" y1="30" x2="230" y2="40" stroke="#10b981" strokeWidth="0.5" />
        
        {/* Bottom left */}
        <line x1="26" y1="216" x2="26" y2="226" stroke="#10b981" strokeWidth="0.5" />
        <line x1="26" y1="226" x2="36" y2="226" stroke="#10b981" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

// Reusable Icon Paths
function IconPaths() {
  return (
    <>
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Main trajectory arc */}
      <path
        d="M 30 110 Q 80 90, 140 100"
        stroke="url(#pathGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Parallel trajectory line */}
      <path
        d="M 32 115 Q 82 96, 142 105"
        stroke="#10b981"
        strokeWidth="0.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Micro-line tech detailing */}
      <g opacity="0.6">
        <line x1="60" y1="97" x2="62" y2="96" stroke="#10b981" strokeWidth="0.5" />
        <line x1="90" y1="92" x2="92" y2="91.5" stroke="#10b981" strokeWidth="0.5" />
        <line x1="110" y1="95" x2="112" y2="95" stroke="#10b981" strokeWidth="0.5" />
      </g>

      {/* Geometric star at end */}
      <g transform="translate(140, 100)">
        <path
          d="M 0 -8 L 2.5 -2.5 L 8 0 L 2.5 2.5 L 0 8 L -2.5 2.5 L -8 0 L -2.5 -2.5 Z"
          fill="url(#pathGrad)"
          stroke="#10b981"
          strokeWidth="0.5"
        />
        
        <path
          d="M 0 -4 L 1.5 -1.5 L 4 0 L 1.5 1.5 L 0 4 L -1.5 1.5 L -4 0 L -1.5 -1.5 Z"
          fill="rgba(255,255,255,0.15)"
        />

        {/* Circuit lines from star */}
        <g opacity="0.5">
          <line x1="8" y1="0" x2="12" y2="0" stroke="#10b981" strokeWidth="0.5" />
          <line x1="12" y1="0" x2="14" y2="-2" stroke="#10b981" strokeWidth="0.5" />
          <line x1="12" y1="0" x2="14" y2="2" stroke="#10b981" strokeWidth="0.5" />
        </g>
      </g>

      {/* Leading edge signal lines */}
      <g opacity="0.3">
        <line x1="25" y1="108" x2="20" y2="107" stroke="#10b981" strokeWidth="0.5" strokeLinecap="round" />
        <line x1="27" y1="113" x2="22" y2="112.5" stroke="#10b981" strokeWidth="0.5" strokeLinecap="round" />
      </g>

      {/* Circuit pattern elements */}
      <g opacity="0.25">
        <circle cx="75" cy="92" r="1" fill="#10b981" />
        <circle cx="105" cy="94" r="0.8" fill="#10b981" />
        <line x1="75" y1="92" x2="78" y2="93" stroke="#10b981" strokeWidth="0.3" />
      </g>
    </>
  );
}
