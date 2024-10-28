import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // COLORS FROM GLOBAL CSS FILE
        'dk-texts-primary': 'var(--color-texts-primary)',
        'dk-texts-secondary': 'var(--color-texts-secondary)',
        'dk-texts-tertiary': 'var(--color-texts-tertiary)',
        'dk-texts-quaternary': 'var(--color-texts-quaternary)',
        'dk-texts-white': 'var(--color-texts-white)',

        'dk-background-default': 'var(--color-background-default)',
        'dk-background-secondary': 'var(--color-background-secondary)',

        'dk-border-normal': 'var(--color-border-normal)',
        'dk-border-base-alpha': 'var(--color-border-base-alpha)',

        'dk-button-primary': 'var(--color-button-primary)',
        'dk-button-primary-hover': 'var(--color-button-primary-hover)',
        'dk-button-secondary': 'var(--color-button-secondary)',
        'dk-button-tertiary': 'var(--color-button-tertiary)',
        'dk-button-success': 'var(--color-button-success)',
        'dk-button-warning': 'var(--color-button-warning)',
        'dk-button-error': 'var(--color-button-error)',

        'dk-icons-base-grey': 'var(--color-icons-base-grey)',
        'dk-icons-base-green': 'var(--color-icons-base-green)',
        'dk-icons-base-red': 'var(--color-icons-base-red)',
        'dk-icons-base-yellow': 'var(--color-icons-base-yellow)',

        'dk-color-primary': 'var(--color-primary)',
        'dk-success': 'var(--color-success)',
        'dk-success-h': 'var(--color-success-hover)',
        'dk-warning': 'var(--color-warning)',
        'dk-error': 'var(--color-error)',
        /* ---------------------------------- */
      },
    },
  },
  plugins: [],
};
export default config;
