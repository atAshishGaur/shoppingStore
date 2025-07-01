
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';

function App() {
  return (
       <Router>
      <Routes>
     
        <Route path="/" element={<HomePage/>} />  
        
      
      </Routes>
    </Router>
  
  );
}

export default App;
