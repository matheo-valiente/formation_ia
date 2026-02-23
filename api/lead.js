/**
 * Vercel serverless function : reçoit l’email du CTA et le transmet à Google Sheets
 * via le Web App URL (Google Apps Script).
 *
 * Variables d’environnement sur Vercel :
 *   GOOGLE_SHEETS_WEBAPP_URL = l’URL de déploiement de ton script Google (ex. https://script.google.com/macros/s/xxx/exec)
 */
const GOOGLE_SHEETS_WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GOOGLE_SHEETS_WEBAPP_URL) {
    console.error('GOOGLE_SHEETS_WEBAPP_URL is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const email = body?.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const sheetRes = await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, date: new Date().toISOString() }),
    });

    if (!sheetRes.ok) {
      const text = await sheetRes.text();
      console.error('Google Sheets webapp error:', sheetRes.status, text);
      return res.status(502).json({ error: 'Could not save lead' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead API error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
