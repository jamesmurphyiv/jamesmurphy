// Live total YouTube views across James's projects.
// Reads YOUTUBE_API_KEY from Pages environment variables (never in the repo).
// Falls back to the verified manual tally when the key is missing or the API errors.

const VIDEO_IDS = [
  "b_h2gfT5H4Q", // KOTOR II official teaser
  "3Ff5KQgyAmA", // The Legend of Skunk Ape
  "9jMnqgMCKT4", // Midnight Justice: The Dawn of Night Wraith
  "SWSa8dvaCSM", // KOTOR: Escape from Taris (film)
  "Sv-a5apauQI", // Sky Guys
  "Xra6bpzmBhM", // Forging Iron Dusk BTS Part 2
  "_6kAz1IJx8Q", // The Tales of Mission & Zaalbar
  "eVz5IkvKdgk", // Future Presence Passed
  "rF0aAd_4Dr8", // Above the Fold
  "tYo0jO_GrQo", // My Best Friend Jay
  "why6EtoQpNQ", // The Last Toy Store
  "HsfHoKP2qu0", // Forging Iron Dusk BTS Part 1
  "i8row7dX8KM", // Forging Iron Dusk BTS Part 3
  "fx_lZF-vcUA", // Forging Iron Dusk BTS Part 4
  "Iw4VEWvhoSQ", // Forging Iron Dusk BTS Part 5
  "FdFSE5OO7zI", // Forging Iron Dusk BTS Part 6
  "CADFMKPcbNs", // Forging Iron Dusk BTS Part 7
  "hBPZ1UifuRc", // Forging Iron Dusk BTS Part 8
  "jMANytQTdPg", // Iron Dusk (full feature)
  "hXlAscbFrhE", // Iron Dusk official trailer
  "LC-koiAmsGE", // KOTOR: Prologue
  "_Y_2SXoZb38", // KOTOR: Escape from Taris official trailer
  "7uHIr1zX7es", // KOTOR: Welcome intro
];

const BASELINE = 1096868; // James's manual tally, verified Nov 2 2026

const HEADERS = {
  "Content-Type": "application/json",
  "Cache-Control": "public, max-age=900", // 15 min edge cache
};

export async function onRequestGet(context) {
  const key = context.env && context.env.YOUTUBE_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ total: BASELINE, live: false }), { headers: HEADERS });
  }

  const cache = caches.default;
  const cacheKey = new Request("https://views-cache.internal/api/views-kotor2");
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  try {
    const url =
      "https://www.googleapis.com/youtube/v3/videos?part=statistics&maxResults=50&id=" +
      VIDEO_IDS.join(",") +
      "&key=" + encodeURIComponent(key);
    const res = await fetch(url);
    const data = await res.json();
    if (!data || !Array.isArray(data.items)) throw new Error("YouTube API error");
    const total = data.items.reduce((sum, it) => sum + Number((it.statistics && it.statistics.viewCount) || 0), 0);
    if (!total) throw new Error("empty total");
    const body = JSON.stringify({ total, live: true, videos: data.items.length, updated: new Date().toISOString() });
    const resp = new Response(body, { headers: HEADERS });
    context.waitUntil(cache.put(cacheKey, resp.clone()));
    return resp;
  } catch (e) {
    return new Response(JSON.stringify({ total: BASELINE, live: false }), { headers: HEADERS });
  }
}
