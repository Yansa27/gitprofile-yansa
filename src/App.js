import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'yansa27', // Your GitHub org/user name. (Required)
          sortBy: 'stars', // stars | updated
          limit: 8, // How many projects to display.
          exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
          },
        },
        social: {
          linkedin: '',
          twitter: '',
          facebook: '',
          instagram: '',
          dribbble: '',
          behance: '',
          medium: '',
          dev: '',
          website: '',
          phone: '085156390652',
          email: 'juliansa837@gmail.com',
        },
        skills: [
          'PHP',
          'Laravel',
          'JavaScript',
          'React.js',
          'Node.js',
          'MySQL',
          'Git',
          'Docker',
          'CSS',
          'Antd',
          'Tailwind',
          'Bootstrap',
        ],
        experiences: [
          {
            company: 'Company name 1',
            position: 'Software Engineer',
            from: 'July 2019',
            to: 'Present',
          },
          {
            company: 'Company name 2',
            position: 'Jr. Software Engineer',
            from: 'January 2019',
            to: ' June 2019',
          },
        ],
        education: [
          {
            institution: 'SMK N1 SEMENDE DARAT LAUT',
            degree: 'Teknik Komputer Dan Jaringan',
            from: '2019',
            to: '2022',
          },
        ],
        // Display blog posts from your medium or dev account. (Optional)
        blog: {
          source: '', // medium | dev
          username: '',
          limit: 5, // How many posts to display. Max is 10.
        },
        googleAnalytics: {
          // GA3 tracking id/GA4 tag id
          id: '', // UA-XXXXXXXXX-X | G-XXXXXXXXXX
        },
        hotjar: {
          id: '',
          snippetVersion: 6,
        },
        themeConfig: {
          defaultTheme: 'light',

          // Hides the theme change switch
          // Useful if you want to support a single color mode
          disableSwitch: false,

          // Should use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultTheme
          respectPrefersColorScheme: true,

          // Hide the ring in Profile picture
          hideAvatarRing: false,

          // Available themes. To remove any theme, exclude from here.
          themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
          ],

          // Custom theme
          customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
          },
        },
      }}
    />
  );
}

export default App;
