export default {
  namespace: 'time',
  state: {
    dateIndex: 0
  },
  reducer: {
    mapIndex(state, { payload }) {
      console.log(payload)
      return { ...state, dateIndex: payload }
    }
  },
  effects: {}
}
