import './App.css';
import Book from './components/Book';

function App() {
  const book = {
    bookTitle: '나의 하루는 4시 40분에 시작된다',
    bookAuthor: '김유진',
    bookPrice: '13,500원',
    bookType: '자기계발서',
  };
  return (
    <div className="App">
      <Book book={book} />
    </div>
  );
}

export default App;
