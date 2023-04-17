import './App.css';
import Admin from './components/Admin';
import Update from './components/Update';
import Add from './components/Add';
import View from './components/View';
import Pagenotfound from './components/Pagenotfound';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Admin/>}/>
        <Route path='edit/:id' element={<Update/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
