module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors:{
      'pink': 'rgb(var(--color-pink)/1)',
      'green': 'rgb(var(--color-green)/1)',
      'dark-1': 'rgb(var(--color-dark-1)/1)',
      'dark-2' : 'rgb(var(--color-dark-2)/1)',
      'dark-3': 'rgb(var(--color-dark-3)/1)',
      'dark-4': 'rgb(var(--color-dark-4)/1)',
      'light-1': 'rgb(var(--color-light-1)/1)',
      'light-2': 'rgb(var(--color-light-2)/1)',
      'light-3': 'rgb(var(--color-light-3)/1)',
      'light-4': 'rgb(var(--color-light-4)/1)',
    },
    extend: {
      fontSize: {
        '3/2xl': "1.125rem",
        '13/14xl': "1.75rem",
        '1.3xl': "1.625rem",
        '7xl': "72px",
        '2.8xl': "56px",
        '4.5xl': "40px",
       },
       spacing:{
        '17' : "4.25rem",
        '3.2': "0.8rem",
        '6.25' : "1.5625rem",
        '8.5': "2.125rem",
        '30': "120px",
        '49': "192px",
        "150": "585px",
        "27.5": "110px",
      },
      lineHeight:{
        'h1-desktop': "87px",
        'h1': "68px",
        '5.5': "22px",
        'paragraph': "150%",
        'logo': "31px",
      }
    },
  },
  plugins: [],
}