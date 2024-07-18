import React
  // , { useState, useCallback }
  from 'react';

export default function UseCallback() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');

  const increment = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Пустой массив зависимостей, функция не будет меняться между рендерами

  const updateText = React.useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment count</button>
      <input type="text" value={text} onChange={updateText} />
      <p>Count: {count}</p>
      <p>Text: {text}</p>
    </div>
  );
}

/*
useCallback возвращает мемоизированную версию функции, которая не изменяется между рендерами, пока не изменятся её зависимости.
Массив зависимостей ([]) определяет, когда должна создаваться новая версия функции. Если массив пуст, функция не изменится.
Использование useCallback может улучшить производительность, предотвращая ненужные рендеры и создания функций.
*/
