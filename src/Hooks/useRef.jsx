import React
  // , { useState, useEffect, useRef }
  from 'react';

export default function UseRef() {
  // Counter
  let ref = React.useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  // StopWatch
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const intervalRef = React.useRef(null);
  const interval = intervalRef.current;

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(interval);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(interval);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  function TextInputWithFocusButton() {
    // Создаем реф с начальным значением null
    const inputEl = React.useRef(null);
    const onButtonClick = () => {
      // Доступ к DOM-элементу напрямую и вызов метода focus
      inputEl.current.focus();
    };
    return (
      <>
        {/* Привязываем реф к input */}
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }

  function Timer() {
    const [count, setCount] = React.useState(0);
    const intervalRef = React.useRef(null);

    React.useEffect(() => {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }, []);

    return <h1>{count}</h1>;
  }

  return (
    <>
      <>
        <button onClick={handleClick}>
          Click me!
        </button>
      </>

      <br></br>

      <>
        <h1 className='text-black'>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
      </>
      <TextInputWithFocusButton />
      <Timer />
    </>
  );
}

/*
useRef возвращает объект с единственным свойством current, которое можно изменять.
Изменение current не приводит к повторному рендерингу компонента.
useRef обычно используется для хранения ссылки на DOM-элемент или любых изменяемых значений, которые должны сохраняться между рендерами.
*/
