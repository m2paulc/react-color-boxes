import Box from './Box';

function ColorContainer () {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  // @ts-ignore
  const boxes: JSX.Element[] = dummyArray.map((n, index): JSX.Element => (<Box key={ index } />));
  return (
    <div className='grid grid-cols-6 grid-rows-3 gap-y-4 gap-x-32'>
      { boxes }
    </div>
  );
}

export default ColorContainer;