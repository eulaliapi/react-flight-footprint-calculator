import {Route, Routes} from 'react-router-dom';
import Calculator from '../Calculator/Calculator';
import Hero from '../Hero/Hero';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
    </> 
  );
}

export default App;
