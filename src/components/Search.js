import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setSearchedBook } from '../redux/reducer';
import { Alert } from '../utils/Alert';

export const Search = () => {
  const [state, setState] = useState('');
  const inputHandler = (e) => {
    setState(e.target.value);
  };

  const alert = useSelector((state) => state.reducer.alert);
  const error = useSelector((state) => state.reducer.error);

  const dispatch = useDispatch();
  const getBooksHandler = async (e) => {
    e.preventDefault();
    dispatch(setSearchedBook(state));
    await dispatch(getBooks({ book: state, page: 1 }));
    setState('');
  };

  return (
    <form onSubmit={getBooksHandler}>
      {alert ? <Alert text={error} /> : null}
      <div className="form-group">
        <input className="form-control" value={state} onChange={inputHandler} />
      </div>
      <button type="submit" className="btn btn-primary center-block">
        Seach
      </button>
    </form>
  );
};
