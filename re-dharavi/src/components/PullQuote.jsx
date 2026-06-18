'use client';

export default function PullQuote({ quote, attribution }) {
  return (
    <blockquote
      className="my-8 py-2"
      style={{
        borderLeft: '3px solid var(--red-primary)',
        paddingLeft: '24px',
      }}
    >
      <p
        className="font-quote italic m-0"
        style={{
          fontSize: 'var(--fs-pull-quote)',
          color: 'var(--charcoal)',
          lineHeight: 1.5,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer
          className="font-ui mt-3"
          style={{
            fontSize: '12px',
            color: 'var(--newspaper-gray)',
            letterSpacing: '0.08em',
          }}
        >
          - {attribution}
        </footer>
      )}
    </blockquote>
  );
}
