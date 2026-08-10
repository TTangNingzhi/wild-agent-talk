/**
 * Each part of the talk carries one Google brand color, used for its divider
 * rule, its RQ markers, its finding badges, and its outline group. The four
 * outline groups use blue, yellow, red, and green once each.
 *
 * Accent color marks hierarchy and data series only. Labels inside a card
 * (step names, loop names) stay grey, so a colored label always means
 * "this is where you are".
 */
export type Accent = 'primary' | 'error' | 'warning' | 'success'

export const groupAccent: Record<string, Accent> = {
  Opening: 'primary',
  'Programming by Chat': 'warning',
  'Coding Agent Misalignment': 'error',
  Closing: 'success',
}

export const accentMain = (accent: Accent) => `${accent}.main` as const

export const accentText = accentMain

/** Faint wash of the accent, for badges and card fills. */
export const accentTint: Record<Accent, string> = {
  primary: 'rgba(26, 115, 232, 0.10)',
  error: 'rgba(234, 67, 53, 0.10)',
  warning: 'rgba(251, 188, 4, 0.20)',
  success: 'rgba(52, 168, 83, 0.12)',
}
