import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
    <div className="container mt-3">
      <h1>Curd Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Create />}></Route>
          <Route exact path='/read' element={<Read />}></Route>
          <Route exact path='/update' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
