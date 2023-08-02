// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");
const singleResult = document.getElementById("singleResult");

const initialValue = {
  value: 0,
};
console.log(initialValue.value);
function scoreboardReducer(state = initialValue, actions) {
  if (actions.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + actions.value,
    };
  } else if (actions.type === "DECREMENT") {
    return {
      ...state,
      value: state.value + actions.value,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(scoreboardReducer);

const render = () => {
  const state = store.getState();
  singleResult.innerText = state.value;
};

store.subscribe(render);
render();
const handleIncrement = () => {
  event.preventDefault();
  const increment = event.target.increment.value;
  store.dispatch({
    type: "INCREMENT",
    value: parseInt(increment),
  });
};

const handleDecrement = () => {
  event.preventDefault();
  const decrement = event.target.decrement.value;
  store.dispatch({
    type: "DECREMENT",
    value: parseInt(decrement),
  });
};
