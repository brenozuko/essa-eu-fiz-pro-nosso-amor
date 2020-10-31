export const state = () => ({
  numberText: 0,
  someValue: true
});


export const mutations = {
  setTextValue(state, value) {
    state.numberText = value
  }
};
