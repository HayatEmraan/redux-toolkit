const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialState = {
  value: 0,
};

function createReducer(state = initialState, actions) {
  if (actions.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (actions.type === "DECREMENT") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(createReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};

store.subscribe(render);

incrementEl.onclick = () => {
  store.dispatch({
    type: "INCREMENT",
  });
};

decrementEl.onclick = () => {
  store.dispatch({
    type: "DECREMENT",
  });
};
