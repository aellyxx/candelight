import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Use hex fallback variables so Tailwind can generate opacity variants reliably */
        background: 'var(--color-background-hex)',
        foreground: 'var(--color-foreground-hex)',
        card: 'var(--color-card-hex)',
        primary: 'var(--color-primary-hex)',
        'primary-foreground': 'var(--color-primary-foreground-hex)',
        secondary: 'var(--color-secondary-hex)',
        'secondary-foreground': 'var(--color-secondary-foreground-hex)',
        muted: 'var(--color-muted-hex)',
        'muted-foreground': 'var(--color-muted-foreground-hex)',
        accent: 'var(--color-accent-hex)',
        'accent-foreground': 'var(--color-accent-foreground-hex)',
        border: 'var(--color-border-hex)',
        destructive: 'var(--color-destructive-hex)',
      },
    },
  },
  plugins: [],
};
export default config;
