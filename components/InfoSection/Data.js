export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'How it works',
  headline: 'Scan a QR Code, Swing Away',
  description:
    'To capture your swing, just scan the QR code featured on selected tee-boxes at our partner golf courses, and follow the instructions. In a matter of seconds, a professional recording of your shot will be sent directly to your inbox.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: require('../../public/logos/pp-logo.svg'),
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
  formElement: false
};

export const homeObjTwo = {
  id: 'partners',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Partners',
  headline: `We've Partnered with Your Favorite Courses and Golf Organizations`,
  description:
    'Click the button below for a complete list of our partner facilities.',
  buttonLabel: 'All Partners',
  imgStart: true,
  img: require('../../public/logos/pp-logo.svg'),
  alt: 'Piggybank',
  dark: true,
  primary: true,
  darkText: false,
  formElement: false
};

export const homeObjThree = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contact',
  headline: 'Want to partner with us?',
  description:
    "Whether you want to get Glimpse set up at your local course, or you're just hoping to get in touch, leave your email below and we will reach out promptly!",
  buttonLabel: 'Submit',
  imgStart: false,
  img: require('../../public/logos/pp-logo.svg'),
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true,
  formElement: 'email'
};
