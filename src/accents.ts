/**
 * Each part of the talk carries one Google brand color, used for its divider
 * rule, its section eyebrows, and its outline group. Blue frames the setup,
 * red marks the half about failure, green closes. Yellow is held back for
 * chart fills, where it has enough area to stay legible.
 */
export type Accent = 'primary' | 'error' | 'success'

export const groupAccent: Record<string, Accent> = {
  Opening: 'primary',
  'Part I': 'primary',
  'Part II': 'error',
  Closing: 'success',
}

export const accentMain = (accent: Accent) => `${accent}.main` as const
