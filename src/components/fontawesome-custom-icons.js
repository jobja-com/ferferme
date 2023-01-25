/**
 * Combination of Font Awesome 5.0 'comment' (regular) and 'plus' (solid) icons.
 * https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt
 */

export const faMessage = {
  iconName: 'message',
  prefix: 'fas',
  icon: [
    640,
    512,
    [],
    '',
    'M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z',
  ],
};

export const faHouse = {
  iconName: 'house',
  prefix: 'fas',
  icon: [
    576,
    512,
    [],
    '',
    'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
  ],
};

export const faCommentPlus = {
  iconName: 'comment-plus',
  prefix: 'fas',
  icon: [
    512,
    512,
    [],
    '',
    `M256 431.6a16 16 0 0 1-16.8 16 310.8 310.8 0 0 1-76.1-13.9A242.6 242.6 0
    0 1 24 480a24 24 0 0 1-17.5-40.5c.5-.4 31.5-33.8 46.4-73.2C19.9 331.2 0 
    287.6 0 240 0 125.1 114.6 32 256 32s256 93.1 256 208c0 15.2-2 30-5.8 44.4a16
    16 0 0 1-20 11l-15.3-4.5a16 16 0 0 1-11-19.4c2.7-10.2 4.1-20.7 4.1-31.5 
    0-88.2-93.3-160-208-160S48 151.8 48 240c0 42.2 21.7 74.1 39.8 93.4l20.6 
    21.8-10.6 28.1a250.8 250.8 0 0 1-19.9 40.2 215 215 0 0 0 57.5-29l19.5-13.8 
    22.7 7.2a259.8 259.8 0 0 0 63.2 11.7 16 16 0 0 1 15.2 15.9v16.1zM478.8 
    343.8h-72v-72a16 16 0 0 0-16-16.1h-16a16 16 0 0 0-16.1 16v72.1h-72.1a16 
    16 0 0 0-16 16v16a16 16 0 0 0 16 16h72V464a16 16 0 0 0 16.1 16h16a16 16 
    0 0 0 16-16v-72h72.1a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16.1z`,
  ],
};

/**
 * An ellipsis icon path (•••)
 *
 * @param {number} r dot radius in 'pixels' (icon width is 24 'pixels')
 */
const ellipsisPath = (r) => {
  const dist = 12 - r;
  return (
    `M 0 12 a ${r} ${r} 0 0 0 ${2 * r} 0 a ${r} ${r} 0 0 0 ${-2 * r} 0 ` +
    `m ${dist} 0 a ${r} ${r} 0 0 0 ${2 * r} 0 a ${r} ${r} 0 0 0 ${-2 * r} 0 ` +
    `m ${dist} 0 a ${r} ${r} 0 0 0 ${2 * r} 0 a ${r} ${r} 0 0 0 ${-2 * r} 0z`
  );
};

export const faEllipsis = {
  iconName: 'ellipsis',
  prefix: 'fas',
  icon: [24, 24, [], '', ellipsisPath(3)],
};

/**
 * LiberaPay (https://liberapay.com/) logo
 */
export const faLiberaPay = {
  iconName: 'comment-plus',
  prefix: 'fas',
  icon: [
    80,
    80,
    [],
    '',
    `M26 63c-3.7 0-6.5-.4-8.5-1.4a9 9 0 01-4.4-3.8 11 11 0 01-1.3-5.5c0-2 ` +
      `.4-4.3 1-6.7l9.5-40L34 3.8 23.5 47.2l-.3 2.5c0 .7 0 1.4.4 2 .3.6.8 1 ` +
      `1.5 1.4.7.3 1.8.6 3 .7L26 63M68.2 38c0 3.8-.7 7.1-1.9 10.1a22.4 22.4 0 ` +
      `01-12.7 13 25.4 25.4 0 01-14.9 1.5l-3.4 13.6H24.2l12.5-52.1A66 66 0 ` +
      `0152 21.7c2.8 0 5.3.4 7.3 1.3a13.6 13.6 0 018 8.7c.5 2 .9 4.1.9 6.4M40.8 ` +
      `53.5c.8.2 1.9.3 3.1.3a11.8 11.8 0 009.5-4.1c1.1-1.3 2-2.9 ` +
      `2.7-4.7.6-1.9.9-3.9.9-6 0-2.2-.5-4-1.4-5.6-1-1.5-2.7-2.3-5-2.3-1.6 ` +
      `0-3.1.2-4.5.5l-5.3 22`,
  ],
};

/**
 * YooMoney (https://yoomoney.ru/) logo
 */
export const faYooMoney = {
  iconName: 'comment-plus',
  prefix: 'fas',
  icon: [
    169,
    120,
    [],
    '',
    `M108.99 0c-33.42 0-60 26.96-60 60 0 33.42 26.96 60 60 60s60-26.96 ` +
      `60-60-26.96-60-60-60zm0 82.4c-12.15 0-22.4-10.25-22.4-22.4 0-12.15 ` +
      `10.25-22.4 22.4-22.4 12.15 0 22.4 10.25 22.4 22.4-.37 12.15-10.25 ` +
      `22.4-22.4 22.4zM48.6 17.47v87.34H27.35L0 17.47h48.6z`,
  ],
};

/**
 * Boosty (https://boosty.to/) logo
 */
export const faBoosty = {
  iconName: 'comment-plus',
  prefix: 'fas',
  icon: [
    32,
    40,
    [],
    '',
    `M1.04 23.9 7.82 0h10.4l-2.1 7.4a.74.74 0 0 0-.06.14L10.54 27.1h5.15A8849.7 ` +
      `8849.7 0 0 0 10.64 40C1.13 39.9-1.54 32.95.8 24.73l.24-.84ZM10.67 ` +
      `40l12.54-18.4h-5.32l4.63-11.79c7.94.85 11.66 7.22 9.47 14.92C29.64 33.02 ` +
      `20.13 40 10.87 40h-.2Z`,
  ],
};
