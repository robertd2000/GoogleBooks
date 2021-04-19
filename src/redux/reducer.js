import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Service } from '../service/service';

const initialStore = {
  books: [],
  totalResults: 0,
  currentPage: 1,
  searchedBook: 'lord',
  error: '',
  loading: false,
  alert: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (data) => {
  const { book, page } = data;
  console.log(data);
  const response = Service.getBook(book, page);
  console.log(response);
  return response;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: initialStore,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchedBook(state, action) {
      state.searchedBook = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      state.loading = true;
      console.log(state.loading);
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      if (action.payload.cod === '400') {
        state.loading = false;
        state.alert = true;
        state.error =
          'Пустой ввод. Пожалуйста введите название города для поиска.';

        return state;
      }

      if (action.payload.cod === '404') {
        state.loading = false;
        state.alert = true;
        state.error = 'Город не найден';

        return state;
      }

      state.loading = true;
      state.books = action.payload.items;
      state.totalResults = action.payload.totalItems;
      state.loading = false;
    });
  },
});

export const { setCurrentPage, setSearchedBook } = booksSlice.actions;
export default booksSlice.reducer;
