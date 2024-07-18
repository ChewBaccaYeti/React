import React
  // , { createContext, useContext, useState }
  from 'react';
import PropTypes from 'prop-types'

// Создаем контекст с начальным значением
const ThemeContext = React.createContext('light');
const moods = {
  happy: '😄',
  sad: '😭'
}
const MoodContext = React.createContext(moods);

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Используем useContext для получения текущей темы и функции переключения
function ThemeTogglerButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  }

  return (
    <button onClick={toggleTheme} style={style}>
      Toggle Theme
    </button>
  );
}

function MoodEmoji() {
  const mood = React.useContext(MoodContext)

  return <p>{mood}</p>

  // Ниже приведен пример старой версии того как можно отренедрить mood с помощью метода Consumer
  // return <MoodContext.Consumer>
  //   {({ mood }) => <p>{mood}</p>}
  // </MoodContext.Consumer>
}

function UseContext() {
  return (
    <ThemeProvider>
      <>
        <MoodContext.Provider value={moods.happy}>
          <MoodEmoji />
        </MoodContext.Provider>
      </>
      <>
        <h1>Welcome to the Themed UseContext!</h1>
        <ThemeTogglerButton />
      </>
    </ThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UseContext;

/*
useContext принимает объект контекста (созданный с помощью createContext) и возвращает текущее значение контекста для ближайшего соответствующего провайдера выше в дереве компонентов.
Компоненты, использующие useContext, будут перерендериваться при изменении значения контекста.
Контексты полезны для глобальных данных, которые должны быть доступны в разных частях приложения, таких как тема, текущий пользователь или настройки.
*/
