import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

import { accentMain, type Accent } from "../accents";

type SectionProps = {
  id: string;
  /** Small label above the heading, e.g. "RQ1" or "Finding 3". */
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  /** Brand color for the eyebrow, inherited from the part this section sits in. */
  accent?: Accent;
};

/**
 * Article-flow section: sized by its content rather than the viewport, so the
 * page reads as one continuous document between slide moments.
 */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  accent = "primary",
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 4, md: 6 }, scrollMarginTop: { xs: 56, md: 64 } }}
    >
      <Stack spacing={{ xs: 2.5, md: 3 }}>
        {(eyebrow || title) && (
          <Stack spacing={1}>
            {eyebrow && (
              <Typography variant="overline" sx={{ color: accentMain(accent) }}>
                {eyebrow}
              </Typography>
            )}
            {title && <Typography variant="h2">{title}</Typography>}
          </Stack>
        )}
        {children}
      </Stack>
    </Box>
  );
}
