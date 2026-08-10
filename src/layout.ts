/** Width of the outline rail's text column. */
export const RAIL_WIDTH = 190

/** Space between the rail and the content. Kept tight: they are one composition. */
export const RAIL_GAP = 56

/** Max width of rail plus gap plus content. Past this, the outer margins grow. */
export const SHELL_MAX = 1380

/** Smallest outer margin, used once the window is narrower than SHELL_MAX. */
export const OUTER_MIN = 48

/**
 * The page shell: rail and content sit side by side as one block, centered in
 * the window. All the breathing room lives on the two outer edges, not between
 * the rail and the slides.
 */
export const shellSx = {
  display: 'flex',
  alignItems: 'flex-start',
  px: {
    xs: 3,
    sm: 4,
    lg: `max(${OUTER_MIN}px, calc((100% - ${SHELL_MAX}px) / 2))`,
  },
} as const
