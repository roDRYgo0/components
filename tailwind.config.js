/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f5ff',
          100: '#e9ecfe',
          200: '#c8cffd',
          300: '#a7b1fc',
          400: '#6577fa',
          500: '#233df8',
          600: '#2037df',
          700: '#1a2eba',
          800: '#152595',
          900: '#111e7a',
        },
        success: {
          50: '#f5fcf8',
          100: '#ecf9f0',
          200: '#cff0db',
          300: '#b2e7c5',
          400: '#79d599',
          500: '#3fc36d',
          600: '#39b062',
          700: '#2f9252',
          800: '#267541',
          900: '#1f6035',
        },
        danger: {
          50: '#fef5f7',
          100: '#feebef',
          200: '#fbced7',
          300: '#f9b1bf',
          400: '#f5768f',
          500: '#f03b5f',
          600: '#d83556',
          700: '#b42c47',
          800: '#902339',
          900: '#761d2f',
        },
        warning: {
          50: '#fffdf6',
          100: '#fffbed',
          200: '#fff6d2',
          300: '#fff1b6',
          400: '#ffe680',
          500: '#ffdb49',
          600: '#e6c542',
          700: '#bfa437',
          800: '#99832c',
          900: '#7d6b24',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'odd', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    plugin(({ addUtilities, e, theme }) => {
      const _ = require('lodash');

      const colorBgContrast = {};
      _.each(theme('colors'), (color, key) => {
        if (typeof color === 'string') {
          colorBgContrast[`.${e(`bg-text-${key}`)}`] = {
            'background-color': `${color}`,
            color: 'white', // callculate color
          };
        } else {
          Object.keys(color).forEach((pepe) => {
            colorBgContrast[`.${e(`bg-text-${key}-${pepe}`)}`] = {
              'background-color': `${color[pepe]}`,
              color: 'white', // callculate color
            };
          });
        }
      });
      addUtilities(colorBgContrast, ['hover', 'focus']);
    }),
  ],
};
