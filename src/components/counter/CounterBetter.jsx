import { useReducer } from 'react';

const btnNormal =
  'bg-indigo-500 text-white px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md';
const btnOutline =
  'text-indigo-500 bg-white px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md';

const initState = {
  value: 0,
};

function counterReducer(state, action) {
  console.log('counterReducer ran');
  console.log('action ===', action);
  console.log('state in reducer ===', state);

  // pakeisti else if i switch
  switch (action.type) {
    case 'UP':
      return { value: state.value + 1 };
    case 'DOWN':
      return { value: state.value - 1 };
    case 'RESET':
      return initState;
    case 'UP_BY':
      return { value: state.value + action.payload };

    default:
      console.warn('nerastas toks action type ', action.type);
      return state;
  }
}

export default function CounterBetter() {
  // const [state, setState] = useState(initState);
  const [state, dispatch] = useReducer(counterReducer, initState);
  console.log('state ===', state);

  function goUp() {
    dispatch({ type: 'UP' });
  }
  function goDown() {
    dispatch({ type: 'DOWN' });
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  function upByValue(howMuch) {
    dispatch({ type: 'UP_BY', payload: howMuch });
  }

  // padaryti po kortele inputa kuri ivedant keistume <h3 className='text-lg mb-4'>Push ups</h3> reiksme

  const isNegative = state.value < 0 ? 'text-red-500' : '';

  return (
    <div className='inline-block rounded-md bg-indigo-50/50 border-indigo-300 border px-3 py-2 text-center shadow-md'>
      <h3 className='text-lg mb-4'>Better</h3>
      <p className={`text-5xl mb-5 ${isNegative}`}>{state.value}</p>
      <div className='flex gap-3'>
        <button onClick={goUp} className={btnNormal}>
          Up
        </button>
        <button onClick={() => upByValue(5)} className={btnNormal}>
          Up by 5
        </button>
        <button onClick={goDown} className={btnNormal}>
          Down
        </button>
        <button onClick={reset} className={btnOutline}>
          reset
        </button>
      </div>
    </div>
  );
}
