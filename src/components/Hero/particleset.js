export const polymode = {
  backgroundMode: {
    enable: true,
    zIndex: 0,
  },
  background: {
    opacity: 0,
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {enable: true, mode: 'repulse'},
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {enable: false, force: 2, smooth: 10},
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 300,
        duration: 0.7,
        opacity: 0.6,
        size: 9,
        speed: 3,
      },
      repulse: {distance: 800, duration: 0.4},
    },
  },
  particles: {
    color: {value: '#6d8959'},
    links: {
      color: '#0f6e58',
      distance: 200,
      enable: false,
      opacity: 0,
      width: 1,
    },
    move: {
      attract: {enable: false, rotateX: 600, rotateY: 1200},
      direction: 'bottom',
      enable: true,
      outMode: 'out',
      random: false,
      size: true,
      speed: 5,
      straight: false,
    },
    number: {density: {enable: true, area: 800}, value: 100},
    opacity: {
      random: false,
      value: 0.005,
    },
    shape: {
      type: 'polygon',
    },
    size: {
      random: true,
      value: 10,
    },
  },
  detectRetina: true,
};
