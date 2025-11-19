import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 * Accepts { fullName, email, message } and proxies to backend /express/contact
 * Returns documented responses:
 *  - 200 { status: 'success', message: 'Message sent successfully' }
 *  - 400 { status: 'failure', message: 'Invalid request body' }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { fullName, email, message } = body ?? {};

    if (!fullName || !email || !message) {
      return NextResponse.json({ status: 'failure', message: 'Invalid request body' }, { status: 400 });
    }

    // Determine backend base URL. Order of preference:
    // 1. CONTACT_BACKEND_URL
    // 2. BACKEND_URL (legacy / alternate)
    // 3. NEXT_PUBLIC_GRAPHQL_URI with `/graphql` removed
    const envContact = (process.env.CONTACT_BACKEND_URL || '').trim();
    const envAlt = (process.env.BACKEND_URL || '').trim();
    const envGraphql = (process.env.NEXT_PUBLIC_GRAPHQL_URI || '').replace(/\/graphql\/?$/i, '').trim();

    const contactBackend = envContact || envAlt || envGraphql;

    if (!contactBackend) {
      console.error('Contact route: no backend configured. Set CONTACT_BACKEND_URL or NEXT_PUBLIC_GRAPHQL_URI');
      return NextResponse.json({ status: 'failure', message: 'Server misconfiguration' }, { status: 500 });
    }

    // If the configured URL already includes the express contact path, use it as-is.
    // Accept both `/express/contact` and trailing-slash variants.
    const cleaned = contactBackend.replace(/\/$/, '');
    const expressPathRegex = /\/express\/contact$/i;
    const target = expressPathRegex.test(cleaned) ? cleaned : `${cleaned}/express/contact`;
    console.info(`Contact proxy: forwarding to ${target}`);

    const proxyRes = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, message }),
    });

    const text = await proxyRes.text().catch(() => '');

    if (!proxyRes.ok) {
      console.error('Contact proxy failed', proxyRes.status, text);
      return NextResponse.json({ status: 'failure', message: 'Failed to send message' }, { status: 502 });
    }

    // Success - return canonical response per docs
    return NextResponse.json({ status: 'success', message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact route error', err);
    return NextResponse.json({ status: 'failure', message: 'Internal server error' }, { status: 500 });
  }
}
