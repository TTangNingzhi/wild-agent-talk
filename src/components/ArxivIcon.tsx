import SvgIcon from '@mui/material/SvgIcon'
import type { SvgIconProps } from '@mui/material/SvgIcon'

/** A preprint page, standing in for arXiv. Reads at 24px next to the GitHub mark. */
export default function ArxivIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M14 2H6.5A1.5 1.5 0 0 0 5 3.5v17A1.5 1.5 0 0 0 6.5 22h11a1.5 1.5 0 0 0 1.5-1.5V7l-5-5Zm0 1.75L17.25 7H14V3.75Z"
        fill="currentColor"
      />
      <path
        d="m9.1 11.4 3.9 5.3M13 11.4l-3.9 5.3"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </SvgIcon>
  )
}
