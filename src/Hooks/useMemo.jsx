import React
  // , { useState, useMemo }
  from 'react';

export default function UseMemo() {
  // Вычисление факториала
  function factorial(n) {
    if (n <= 0) return 1;
    return n * factorial(n - 1);
  }

  const [number, setNumber] = React.useState(1);
  const [dummy, setDummy] = React.useState(0);

  // Используем useMemo для мемоизации вычисленного значения
  const result = React.useMemo(() => factorial(number), [number]);

  // Сортировка и фильтр списка элементов
  const items = [
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 15 },
    { id: 4, name: 'Item 4', value: 25 },
  ];
  const [filter, setFilter] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('asc');

  // Используем useMemo для мемоизации фильтрованного и отсортированного списка
  const filteredAndSortedItems = React.useMemo(() => {
    return items
      .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.value - b.value;
        } else {
          return b.value - a.value;
        }
      });
  }, [filter, sortOrder]);

  return (
    <>
      <>
        <h1>Factorial Calculator</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <p>Factorial: {result}</p>
        <button onClick={() => setDummy(dummy + 1)}>Re-render</button>
      </>

      <>
        <h1>List sorting</h1>
        <input
          type="text"
          placeholder="Filter items"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
        <ul>
          {filteredAndSortedItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.value}
            </li>
          ))}
        </ul></>
    </>
  );
}

/*
useMemo — это хук в React, который используется для мемоизации (кэширования) вычисленных значений.
Он полезен, когда нужно оптимизировать производительность,
предотвращая ненужные повторные вычисления при каждом рендере компонента, если зависимости не изменились.
*/
