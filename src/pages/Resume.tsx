import { portfolioData } from '../data/portfolio';

export default function Resume() {
  const resumeFile =
    portfolioData.resume?.[0]?.file;

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom, #0b1020, #111827)',
        padding: '2rem',
        color: 'white',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* HEADER */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                color: '#7c3aed',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.8rem',
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}
            >
              Professional Resume
            </p>

            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                margin: 0,
              }}
            >
              {portfolioData.name}
            </h1>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '1rem 1.5rem',
                background: '#1f2937',
                borderRadius: '14px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                border:
                  '1px solid rgba(255,255,255,0.08)',
              }}
            >
              Open Resume
            </a>

            <a
              href={resumeFile}
              download
              style={{
                padding: '1rem 1.5rem',
                background: '#7c3aed',
                borderRadius: '14px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow:
                  '0 10px 30px rgba(124,58,237,0.4)',
              }}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* PDF VIEWER */}

        <div
          style={{
            width: '100%',
            height: '90vh',
            overflow: 'hidden',
            borderRadius: '28px',
            background: '#111827',
            border:
              '1px solid rgba(255,255,255,0.08)',
            boxShadow:
              '0 20px 80px rgba(0,0,0,0.45)',
          }}
        >
          <iframe
            src={resumeFile}
            title="Resume Viewer"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              background: '#111827',
            }}
          />
        </div>

        {/* FALLBACK */}

        {!resumeFile && (
          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              borderRadius: '18px',
              background:
                'rgba(239,68,68,0.12)',
              border:
                '1px solid rgba(239,68,68,0.25)',
              color: '#fca5a5',
            }}
          >
            Resume file not found.
          </div>
        )}
      </div>
    </div>
  );
}