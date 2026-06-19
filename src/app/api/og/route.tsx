import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0f0f12 0%, #2b0b12 100%)',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 80,
          fontWeight: 700,
        }}
      >
        Alpha Mates
      </div>
    ),
    { width: 1200, height: 630 },
  );
}


