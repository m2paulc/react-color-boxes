import { useState, useEffect } from 'react';

function Box () {
  const [color, setColor] = useState('');
  const colorArray = [
    '#f9fafb', '#9ca3af', '#374151', '#030712', '#a8a29e', '#44403c', '#292524', '#1c1917', '#0c0a09', '#fef2f2', '#fecaca', '#f87171', '#ef4444', '#dc2626', '#7f1d1d', '#450a0a', '#ffedd5', '#fdba74', '#f97316', '#ea580c', '#9a3412', '#431407', '#fef3c7', '#fcd34d', '#f59e0b', '#c2410c', '#7c2d12', '#fef3c7', '#fcd34d', '#f59e0b', '#d97706', '#c2410c', '#9a3412', '#431407', '#78350f', '#fef9c3', '#fde047', '#eab308', '#a16207', '#713f12', '#d9f99d', '#a3e635', '#65a30d', '#3f6212', '#1a2e05', '#22c55e', '#15803d', '#14532d', '#10b981', '#047857', '#022c22', '#5eead4', '#0d9488', '#134e4a', '#a5f3fc', '#06b6d4', '#0e7490', '#164e63', '#38bdf8', '#0369a1', '#0c4a6e', '#2563eb', '#172554', '#6366f1', '#4338ca', '#312e81', '#8b5cf6', '#6d28d9', '#4c1d95', '#7e22ce', '#3b0764', '#d946ef', '#a21caf', '#701a75', '#f472b6', '#db2777', '#9d174d', '#9f1239', '#4c0519'
  ];

  useEffect(() => {
    return setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
  }, []);


  const changeBackground = (): void => {
    let bgColor = '';
    do {
      const idx: number = Math.floor(Math.random() * colorArray.length);
      bgColor = colorArray[idx];
    } while (bgColor === color);
    setColor(bgColor);
  };

  return (
    <div onClick={ (): void => changeBackground() } className='box-border h-32 w-32 border-none flex flex-wrap justify-center content-end text-sm' style={ { backgroundColor: color } }>
      { color }
    </div >
  );
}

export default Box;