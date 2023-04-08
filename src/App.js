import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Blog from './Components/Blog';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/blog' element={<Blog/>} />
     </Routes>
    </div>
  );
}

export default App;
