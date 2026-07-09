/**
 * Curated photographic placeholders.
 *
 * These are art-directed images chosen to read as an established Australian
 * advisory firm — considered landscapes, quiet professional settings, dignified
 * portraits. No stock clichés (no handshakes, no high-fives, no sticky-note
 * startup scenes).
 *
 * The files are vendored locally in `public/photos/` so they always load and
 * the site is fully self-contained (external image hotlinks are unreliable).
 * To replace with the client's own photography, drop a file into
 * `public/photos/` and point the `url` at it — every consumer reads from this
 * single manifest, so the whole site updates from here.
 */

export type Photo = {
  /** Display URL — a local path served from /public. */
  url: string
  /** Descriptive, human alt text. */
  alt: string
  /** Optional plate caption, e.g. photographer's note or location. */
  caption?: string
}

export const photos = {
  coastRoad: {
    url: '/photos/coastRoad.jpg',
    alt: 'A coastal road curving along the New South Wales escarpment at dusk',
    caption: 'Grand Pacific Drive, NSW',
  },
  harbourDusk: {
    url: '/photos/harbourDusk.jpg',
    alt: 'Sydney Harbour at dusk, the city lights reflecting on still water',
    caption: 'Sydney Harbour',
  },
  harbourDay: {
    url: '/photos/harbourDay.jpg',
    alt: 'Sydney Harbour in daylight with ferries crossing',
    caption: 'Sydney Harbour',
  },
  quietOffice: {
    url: '/photos/quietOffice.jpg',
    alt: 'A calm, light-filled office with a desk beside floor-to-ceiling windows',
  },
  planningDesk: {
    url: '/photos/planningDesk.jpg',
    alt: 'Two people reviewing plans and notes together at a desk',
  },
  conversation: {
    url: '/photos/conversation.jpg',
    alt: 'A considered conversation across a table during a working session',
  },
  roundtable: {
    url: '/photos/roundtable.jpg',
    alt: 'A small group in focused discussion around a table',
  },
  seminar: {
    url: '/photos/seminar.jpg',
    alt: 'A briefing session with attendees seated before a presenter',
  },
  mentoring: {
    url: '/photos/mentoring.jpg',
    alt: 'A one-to-one advisory conversation between two professionals',
  },
  founder: {
    url: '/photos/founder.jpg',
    alt: 'Portrait of the founder of TransitionHQ',
    caption: 'Placeholder portrait — replace with founder photography',
  },
  teamManGlasses: {
    url: '/photos/teamManGlasses.jpg',
    alt: 'Portrait of a senior advisor',
  },
  teamSuitMan: {
    url: '/photos/teamSuitMan.jpg',
    alt: 'Portrait of a transition consultant',
  },
  teamWomanShort: {
    url: '/photos/teamWomanShort.jpg',
    alt: 'Portrait of a recruitment specialist',
  },
  teamWoman2: {
    url: '/photos/teamWoman2.jpg',
    alt: 'Portrait of a career coach',
  },
  manHeadshot: {
    url: '/photos/manHeadshot.jpg',
    alt: 'Portrait of an advisor',
  },
} satisfies Record<string, Photo>

export type PhotoKey = keyof typeof photos
