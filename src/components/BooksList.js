import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BooksItem } from './BooksItem';
import { getBooks } from '../redux/reducer';
import Loader from '../utils/loader';

export const BooksList = (props) => {
  useEffect(async () => {
    await dispatch(getBooks({ book: 'lord', page: 1 }));
  }, []);

  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.reducer.books);
  const loading = useSelector((state) => state.reducer.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
        {booksList.length
          ? booksList.map((book) => {
              return <BooksItem data={book} key={book.id + Math.random()} />;
            })
          : 'Not found'}
      </div>
    </div>
  );
};
