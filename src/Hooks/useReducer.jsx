import React
  // , { useReducer }
  from 'react';

// Определяем начальное состояние
export default function UseReducer() {
  const initialState = { count: 0 };

  // Определяем редюсер
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      default:
        throw new Error();
    }
  }

  // Используем хук useReducer
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );

}

/* useReducer — это хук в React, который используется для управления сложными состояниями в компоненте.
Он является альтернативой хуку useState и более подходящим для случаев,
когда состояние зависит от множества различных действий или когда обновления состояния зависят от предыдущего состояния.
*/
