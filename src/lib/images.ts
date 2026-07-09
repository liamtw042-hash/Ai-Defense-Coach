/**
 * Curated photographic placeholders.
 *
 * These are art-directed Unsplash references chosen to read as an established
 * Australian advisory firm — considered landscapes, quiet professional
 * settings, dignified portraits. No stock clichés (no handshakes, no
 * high-fives, no sticky-note startup scenes).
 *
 * To replace with the client's own photography, drop a file into /public and
 * swap the `url` for a local path (e.g. `/photos/founder.jpg`). Every consumer
 * reads from this single manifest, so the whole site updates from here.
 */

const BASE = 'https://images.unsplash.com/photo-'

type ImgOpts = { w?: number; h?: number; faces?: boolean; q?: number }

function build(id: string, { w = 1400, h, faces = false, q = 68 }: ImgOpts = {}) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    q: String(q),
    w: String(w),
  })
  if (h) params.set('h', String(h))
  if (faces) params.set('crop', 'faces,edges')
  return `${BASE}${id}?${params.toString()}`
}

export type Photo = {
  /** Full-resolution display URL. */
  url: string
  /** Descriptive, human alt text. */
  alt: string
  /** Optional plate caption, e.g. photographer's note or location. */
  caption?: string
}

const ids = {
  coastRoad: '1494233892892-84542a694e72',
  harbourDusk: '1523482580672-f109ba8cb9be',
  harbourDay: '1506973035872-a4ec16b8e8d9',
  quietOffice: '1497215728101-856f4ea42174',
  planningDesk: '1454165804606-c3d57bc86b40',
  conversation: '1517245386807-bb43f82c33c4',
  roundtable: '1521737604893-d14cc237f11d',
  seminar: '1524178232363-1fb2b075b655',
  mentoring: '1551836022-d5d88e9218df',
  founder: '1573497019940-1c28c88b4f3e',
  teamManGlasses: '1560250097-0b93528c311a',
  teamSuitMan: '1519085360753-af0119f7cbe7',
  teamWomanShort: '1531123897727-8f129e1688ce',
  teamWoman2: '1567532939604-b6b5b0db2604',
  manHeadshot: '1507003211169-0a1dd7228f2d',
} as const

export const photos = {
  coastRoad: {
    url: build(ids.coastRoad, { w: 1200, h: 1500 }),
    alt: 'A coastal road curving along the New South Wales escarpment at dusk',
    caption: 'Grand Pacific Drive, NSW',
  },
  harbourDusk: {
    url: build(ids.harbourDusk, { w: 2000, h: 1100 }),
    alt: 'Sydney Harbour at dusk, the city lights reflecting on still water',
    caption: 'Sydney Harbour',
  },
  harbourDay: {
    url: build(ids.harbourDay, { w: 1400, h: 1000 }),
    alt: 'Sydney Harbour in daylight with ferries crossing',
    caption: 'Sydney Harbour',
  },
  quietOffice: {
    url: build(ids.quietOffice, { w: 1300, h: 1000 }),
    alt: 'A calm, light-filled office with a desk beside floor-to-ceiling windows',
  },
  planningDesk: {
    url: build(ids.planningDesk, { w: 1300, h: 900 }),
    alt: 'Two people reviewing plans and notes together at a desk',
  },
  conversation: {
    url: build(ids.conversation, { w: 1300, h: 900 }),
    alt: 'A considered conversation across a table during a working session',
  },
  roundtable: {
    url: build(ids.roundtable, { w: 1300, h: 900 }),
    alt: 'A small group in focused discussion around a table',
  },
  seminar: {
    url: build(ids.seminar, { w: 1300, h: 900 }),
    alt: 'A briefing session with attendees seated before a presenter',
  },
  mentoring: {
    url: build(ids.mentoring, { w: 1300, h: 1000 }),
    alt: 'A one-to-one advisory conversation between two professionals',
  },
  founder: {
    url: build(ids.founder, { w: 1000, h: 1250, faces: true }),
    alt: 'Portrait of the founder of TransitionHQ',
    caption: 'Placeholder portrait — replace with founder photography',
  },
  teamManGlasses: {
    url: build(ids.teamManGlasses, { w: 800, h: 1000, faces: true }),
    alt: 'Portrait of a senior advisor',
  },
  teamSuitMan: {
    url: build(ids.teamSuitMan, { w: 800, h: 1000, faces: true }),
    alt: 'Portrait of a transition consultant',
  },
  teamWomanShort: {
    url: build(ids.teamWomanShort, { w: 800, h: 1000, faces: true }),
    alt: 'Portrait of a recruitment specialist',
  },
  teamWoman2: {
    url: build(ids.teamWoman2, { w: 800, h: 1000, faces: true }),
    alt: 'Portrait of a career coach',
  },
  manHeadshot: {
    url: build(ids.manHeadshot, { w: 800, h: 1000, faces: true }),
    alt: 'Portrait of an advisor',
  },
} satisfies Record<string, Photo>

export type PhotoKey = keyof typeof photos
