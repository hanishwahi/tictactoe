 import './App.css';
import Board from './Components/Board';
 import TicTacToe from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
  
function App() {
    return (  
 <>

<BrowserRouter>
<Routes>

    <Route path='/' element={<TicTacToe/>}/>
    <Route path='/board/f/:first/s/:second' element={<Board/>}/>
</Routes>
</BrowserRouter>

  
  </>

    );
}

export default App;