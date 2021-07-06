import {nanoid} from 'nanoid';

export const headData = {
  title: 'Khan Design',
  lang: 'en',
  description: 'Welcome to my Portfolio',
};

export const heroData = {
  title: 'Welcome to my portfolio, ' + " I'm ",
  name: 'Kaan Subaşıoğlu, ',
  subtitle: 'I am an adaptive Full-Stack' + ' Developer based in Cambridge',
  cta: 'More about me',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi there,',
  paragraphTwo: " Welcome to Khan Design, I'm Kaan Subaşıoğlu. I am a self-taught programmer who focuses on designing, writing and launching code that is easy to read and maintain, well tested and secure. I'm always looking for an opportunity to put my skills to the test, especially if it entails problem solving and research. Before becoming a programmer I've always been excited about acquiring new skills & information, making things existing better for others and trying to find new design themes. ",
  paragraphThree: ' I would like to continue this journey in a company that appreciates its customers and try to spark joy in them. I am especially interested in a work that can teach people something in a fun way, like representation of a culture through visual media or gamification of a teaching. If you think I will be a good asset to your work, you can find my CV and contact details here.',
  resume: 'https://read.cv/khan',
};

export const projectsData = [
  {
    id: nanoid (),
    img: 'logo.jpg',
    title: 'Open Media',
    info: 'Open Media is a streaming platform, that you can start of your own streams using your Google account or watch other streams. All you need is setup your OBS for streaming.',
    info2: "Open Media's technology stack consists of : HTML, CSS, JS, Semantic UI, React.js, Redux, React-Router, RESTful Json-Server API, lodash ",
    url: 'https://open-media.netlify.app/',
    repo: 'https://github.com/Khan-Design/Open-Media',
  },
  {
    id: nanoid (),
    img: 'face.jpg',
    title: 'FaceR',
    info: 'FaceR is a face recognition game website. By registering you will access to a game of face recognition with other players. Game will keep your progress and you will gain ranks as you feed the FaceR with more faces to recognize',
    info2: "Facer's technology stack consists of : HTML, CSS, JS, React.js, Redux, Node.js, Express.js, PostgreSQL, Amazon Lambda, Knex.js, Bcrypt",
    url: 'https://facer.netlify.app',
    repo: 'https://github.com/Khan-Design/FaceR',
  },
];

export const contactData = {
  email: 'kaansubasioglu@gmail.com',
  phone: '+44 7522 184 429',
};

export const footerData = {
  networks: [
    {
      id: nanoid (),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kaan-suba%C5%9F%C4%B1o%C4%9Flu-21b081105/',
    },
    {
      id: nanoid (),
      name: 'github',
      url: 'https://github.com/Khan-Design/',
    },
    {
      id: nanoid (),
      name: 'codepen',
      url: 'https://codepen.io/khan-design',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
