'use client';

export default function CalloutStat({ number, label }) {
  return (
    <div className="my-8">
      <span
        className="font-display block"
        style={{
          fontSize: '96px',
          lineHeight: 1,
          color: 'var(--brand-rose)',
        }}
      >
        {number}
      </span>
      <span
        className="font-ui block mt-1"
        style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--charcoal)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
