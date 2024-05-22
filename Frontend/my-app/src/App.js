import { Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Add from './Add';
import FormDataTable from './FormDataTable';
import Home from './Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route> 
      <Route path="/create" element={<Add />}></Route> 
      <Route path="/getFormData" element={<FormDataTable />}></Route> 
      
     
      </Routes>
    </Router>
  );
}

export default App;