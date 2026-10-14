export default async function handler(req, res) {
  const HEYLO_BASE_URL = process.env.HEYLO_BASE_URL || 'https://api.heylo.com';
  const HEYLO_API_KEY = process.env.HEYLO_API_KEY;

  if (!HEYLO_API_KEY) {
    return res.status(500).json({ error: 'Missing HEYLO_API_KEY' });
  }

  const path = Array.isArray(req.query.path) ? req.query.path[0] : req.query.path || '/';
  const url = new URL(path.startsWith('http') ? path : `${HEYLO_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`);

  for (const [key, value] of Object.entries(req.query)) {
    if (key === 'path') continue;
    const nextValue = Array.isArray(value) ? value[0] : value;
    if (typeof nextValue === 'string') {
      url.searchParams.set(key, nextValue);
    }
  }

  try {
    const response = await fetch(url.toString(), {
      method: req.method || 'GET',
      headers: {
        Authorization: `Bearer ${HEYLO_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const contentType = response.headers.get('content-type') || '';
    const body = contentType.includes('application/json') ? await response.json() : await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'Heylo API request failed',
        status: response.status,
        details: body,
      });
    }

    return res.status(200).json({
      success: true,
      data: body,
    });
  } catch (error) {
    console.error('Heylo proxy error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message,
    });
  }
}
