import SECTIONS_DATA from './sections.data.js';

const initialState = {
  sections: SECTIONS_DATA
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};