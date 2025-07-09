/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': {
          DEFAULT: '#2D5A27', // Deep forest green
          50: '#F0F4F0', // Very light green
          100: '#D9E5D7', // Light green
          200: '#B8D1B3', // Medium light green
          300: '#8FB587', // Medium green
          400: '#6A9A5F', // Medium dark green
          500: '#4A7C59', // Secondary green
          600: '#2D5A27', // Primary green
          700: '#234520', // Dark green
          800: '#1A3319', // Very dark green
          900: '#0F1F0E', // Darkest green
          foreground: '#FFFFFF', // white
        },
        
        // Secondary Colors
        'secondary': {
          DEFAULT: '#4A7C59', // Balanced growth green
          50: '#F1F5F2', // Very light secondary
          100: '#DCE7DF', // Light secondary
          200: '#C2D4C6', // Medium light secondary
          300: '#9BB8A1', // Medium secondary
          400: '#739A7C', // Medium dark secondary
          500: '#4A7C59', // Secondary
          600: '#3E6649', // Dark secondary
          700: '#325139', // Very dark secondary
          800: '#263C2A', // Darkest secondary
          900: '#1A281C', // Deepest secondary
          foreground: '#FFFFFF', // white
        },

        // Accent Colors
        'accent': {
          DEFAULT: '#7FB069', // Fresh progress green
          50: '#F4F8F2', // Very light accent
          100: '#E5F0E1', // Light accent
          200: '#CCE1C4', // Medium light accent
          300: '#A8CFA0', // Medium accent
          400: '#93C085', // Medium dark accent
          500: '#7FB069', // Accent
          600: '#6B9456', // Dark accent
          700: '#577843', // Very dark accent
          800: '#435C30', // Darkest accent
          900: '#2F401D', // Deepest accent
          foreground: '#FFFFFF', // white
        },

        // Background Colors
        'background': '#FAFBFA', // Clean canvas
        'surface': '#F5F7F5', // Subtle depth
        'card': '#FFFFFF', // white
        'popover': '#FFFFFF', // white
        'muted': {
          DEFAULT: '#F5F7F5', // Subtle depth
          foreground: '#4A5A4A', // Clear hierarchy
        },

        // Text Colors
        'foreground': '#1A1D1A', // Strong readability
        'text-primary': '#1A1D1A', // Strong readability
        'text-secondary': '#4A5A4A', // Clear hierarchy

        // Status Colors
        'success': {
          DEFAULT: '#6B8E23', // Natural achievement
          50: '#F3F6ED', // Very light success
          100: '#E4EBD4', // Light success
          200: '#CDD8B0', // Medium light success
          300: '#A8BE7A', // Medium success
          400: '#8AA64F', // Medium dark success
          500: '#6B8E23', // Success
          600: '#5A771E', // Dark success
          700: '#486019', // Very dark success
          800: '#364914', // Darkest success
          900: '#24320F', // Deepest success
          foreground: '#FFFFFF', // white
        },

        'warning': {
          DEFAULT: '#D2691E', // Earthy urgency
          50: '#FDF5F0', // Very light warning
          100: '#FAE7D9', // Light warning
          200: '#F4D0B3', // Medium light warning
          300: '#EAB082', // Medium warning
          400: '#DE8F51', // Medium dark warning
          500: '#D2691E', // Warning
          600: '#B05719', // Dark warning
          700: '#8E4514', // Very dark warning
          800: '#6C340F', // Darkest warning
          900: '#4A230A', // Deepest warning
          foreground: '#FFFFFF', // white
        },

        'error': {
          DEFAULT: '#B22222', // Helpful concern
          50: '#F9F0F0', // Very light error
          100: '#F2DADA', // Light error
          200: '#E6B5B5', // Medium light error
          300: '#D48585', // Medium error
          400: '#C35454', // Medium dark error
          500: '#B22222', // Error
          600: '#951D1D', // Dark error
          700: '#781818', // Very dark error
          800: '#5B1313', // Darkest error
          900: '#3E0E0E', // Deepest error
          foreground: '#FFFFFF', // white
        },

        // Destructive (alias for error)
        'destructive': {
          DEFAULT: '#B22222', // Helpful concern
          foreground: '#FFFFFF', // white
        },

        // Border Colors
        'border': '#E5E9E5', // Subtle border
        'input': '#E5E9E5', // Input border
        'ring': '#7FB069', // Focus ring accent

        // Conversion Colors
        'conversion': {
          DEFAULT: '#FF6B35', // Energetic orange
          50: '#FFF4F0', // Very light conversion
          100: '#FFE4D9', // Light conversion
          200: '#FFC4B3', // Medium light conversion
          300: '#FF9B82', // Medium conversion
          400: '#FF8351', // Medium dark conversion
          500: '#FF6B35', // Conversion
          600: '#E55A2B', // Dark conversion
          700: '#CC4921', // Very dark conversion
          800: '#B23817', // Darkest conversion
          900: '#99270D', // Deepest conversion
          foreground: '#FFFFFF', // white
        },

        // Trust Colors
        'trust': {
          DEFAULT: '#4A7C59', // Trust builder sage
          foreground: '#FFFFFF', // white
        },
      },

      fontFamily: {
        'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'Courier New', 'monospace'],
        'accent': ['Fira Code', 'Courier New', 'monospace'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
        '7xl': ['4.5rem', { lineHeight: '1.3' }],
        '8xl': ['6rem', { lineHeight: '1.3' }],
        '9xl': ['8rem', { lineHeight: '1.3' }],
      },

      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '55': '13.75rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
      },

      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        'organic': '0 4px 12px rgba(45, 90, 39, 0.1)',
        'layered': '0 1px 3px rgba(45, 90, 39, 0.12), 0 1px 2px rgba(45, 90, 39, 0.24)',
        'soft': '0 2px 8px rgba(45, 90, 39, 0.08)',
        'medium': '0 4px 16px rgba(45, 90, 39, 0.12)',
        'strong': '0 8px 24px rgba(45, 90, 39, 0.16)',
      },

      animation: {
        'breathe': 'breathe 3s ease-in-out infinite',
        'pulse-radial': 'pulse-radial 2s ease-out infinite',
        'count-up': 'count-up 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.3s ease-out',
      },

      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'pulse-radial': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'count-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'reveal': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      screens: {
        'xs': '475px',
        '3xl': '1680px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}