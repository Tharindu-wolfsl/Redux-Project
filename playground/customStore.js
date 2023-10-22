import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listners = [];

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listners.length; i++) {
      listners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subcribe(listner) {
    listners.push(listner);
  }

  return {
    getState,
    dispatch,
    subcribe
  };
}
//call above function and export object return it
export default createStore(reducer);
