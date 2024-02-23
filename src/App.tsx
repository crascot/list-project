import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List/List';
import './App.css';

function App() {
  const array1 = Array.from({ length: 50 }, (_, index) => index + 1);
  const array2 = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List content={array1} />} />
        <Route path='/best' element={<List content={array2} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;