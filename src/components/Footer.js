import { useDispatch, useSelector } from 'react-redux';
import { getBooks, setCurrentPage } from '../redux/reducer';

export const Footer = () => {
  const dispatch = useDispatch();
  const totalRes = useSelector((state) => state.reducer.totalResults);
  const currentPage = useSelector((state) => state.reducer.currentPage);
  const searhedBook = useSelector((state) => state.reducer.searchedBook);

  const totalPages = Math.ceil(totalRes / 10);
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const changePage = async (title, page) => {
    await dispatch(getBooks({ book: title, page }));
    dispatch(setCurrentPage(page));
  };

  const pagesItem = pages.map((p) => (
    <span
      key={p}
      onClick={() => changePage(searhedBook, p)}
      className={p === currentPage ? 'pageItem active' : 'pageItem'}
    >
      {' '}
      {p}{' '}
    </span>
  ));

  const offset = currentPage > 3 ? currentPage - 3 : currentPage;
  const endOffset = 7;

  return (
    <div className="footer">
      {pagesItem.length > 20
        ? [
            ...pagesItem.slice(offset - 1, offset + endOffset),
            '...',
            pagesItem[pagesItem.length - 1],
          ]
        : pagesItem}
    </div>
  );
};
