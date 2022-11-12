import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_DATA } from '../src/redux/reducers/geodb/actions';
import { selectGeodb } from '../src/redux/reducers/geodb/selectors';

export default function Home() {
  const data = useSelector(selectGeodb);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: LOAD_DATA, payload: { data: ['1'] } });
  }, []);

  return (
    <>
      <h1>GeoDB</h1>
    </>
  );
}
