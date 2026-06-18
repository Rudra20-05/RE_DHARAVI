'use client';

export default function NewsClipping({ date, headline, body, rotation = 0 }) {
  return (
    <article
      className="relative flex-shrink-0 cursor-default transition-all duration-250 ease-out"
      style={{
        width: '280px',
        minHeight: '360px',
        backgroundColor: 'var(--cream)',
        border: '1px solid var(--paper-border)',
        borderRadius: '2px',
        boxShadow: '4px 6px 20px rgba(0, 0, 0, 0.15)',
        transform: `rotate(${rotation}deg)`,
        padding: '24px',
        /* Paper texture via CSS noise */
        backgroundImage: `
          repeating-radial-gradient(
            circle at 17% 32%,
            rgba(0,0,0,0.015) 0px,
            transparent 1px
          ),
          repeating-radial-gradient(
            circle at 62% 78%,
            rgba(0,0,0,0.01) 0px,
            transparent 1px
          ),
          repeating-radial-gradient(
            circle at 84% 12%,
            rgba(0,0,0,0.012) 0px,
            transparent 1px
          )
        `,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg) translateY(-4px)`;
        e.currentTarget.style.boxShadow = '8px 12px 30px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg)`;
        e.currentTarget.style.boxShadow = '4px 6px 20px rgba(0, 0, 0, 0.15)';
      }}
      tabIndex={0}
      role="article"
      aria-label={`${date} - ${headline}`}
    >
      {/* Date */}
      <span
        className="font-ui block uppercase"
        style={{
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: 'var(--orange-accent)',
          fontWeight: 500,
        }}
      >
        {date}
      </span>

      {/* Horizontal rule */}
      <hr
        className="my-3"
        style={{
          border: 'none',
          borderTop: '1px solid var(--paper-border)',
        }}
      />

      {/* Headline */}
      <h4
        className="font-newspaper m-0"
        style={{
          fontSize: '18px',
          color: 'var(--charcoal)',
          lineHeight: 1.3,
        }}
      >
        {headline}
      </h4>

      {/* Body */}
      <p
        className="font-newspaper mt-4"
        style={{
          fontSize: '13px',
          color: '#444444',
          lineHeight: 1.6,
        }}
      >
        {body}
      </p>
    </article>
  );
}
