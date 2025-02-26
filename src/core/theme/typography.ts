export const body = {
  100: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 400,
    letterSpacing: '0.32px',
  },
  200: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    letterSpacing: '0.16px',
  },
  300: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  400: {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  500: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 400,
    letterSpacing: '0px',
  },
};

export const headings = {
  200: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 700,
    letterSpacing: '0.16px',
  },
  300: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 700,
    letterSpacing: '0px',
  },
  400: {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 700,
    letterSpacing: '0px',
  },
  500: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 700,
    letterSpacing: '0px',
  },
  600: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 700,
    letterSpacing: '0px',
  },
  700: {
    fontSize: '2rem',
    lineHeight: '2.5rem',
    fontWeight: 700,
    letterSpacing: '0px',
  },
};

export const typographyMixins = {
  // HEADINGS
  heading_200: headings[200],
  heading_300: headings[300],
  heading_400: headings[400],
  heading_500: headings[500],
  heading_600: headings[600],
  heading_700: headings[700],
  // BODY
  body_100: {
    ...body[100],
  },
  body_100_italic: {
    ...body[100],
    fontStyle: 'italic',
  },
  body_100_bold: {
    ...body[100],
    fontWeight: 600,
  },
  body_200: {
    ...body[200],
  },
  body_200_italic: {
    ...body[200],
    fontStyle: 'italic',
  },
  body_200_bold: {
    ...body[200],
    fontWeight: 600,
  },
  body_300: {
    ...body[300],
  },
  body_300_italic: {
    ...body[300],
    fontStyle: 'italic',
  },
  body_300_bold: {
    ...body[300],
    fontWeight: 600,
  },
  body_400: {
    ...body[400],
  },
  body_400_italic: {
    ...body[400],
    fontStyle: 'italic',
  },
  body_400_bold: {
    ...body[400],
    fontWeight: 600,
  },
  body_500: {
    ...body[500],
  },
  body_500_italic: {
    ...body[500],
    fontStyle: 'italic',
  },
  body_500_bold: {
    ...body[500],
    fontWeight: 600,
  },
};

export default typographyMixins;
