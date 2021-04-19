import { BooksList } from './components/BooksList';
import { Search } from './components/Search';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Search />
      <BooksList />
      <Footer />
    </div>
  );
}

export default App;
