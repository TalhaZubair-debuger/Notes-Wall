import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayContainer from './components/DisplayContainer';
import Navbar from './components/Navbar';
import AddNote from './components/AddNote';
import UpdateNote from './components/UpdateNote';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [dataChange, setDataChange] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <DisplayContainer dataChange={dataChange} setDataChange={setDataChange} />

          <Routes>
            <Route exact path='/' element={<AddNote setDataChange={setDataChange} />} />
            <Route exact path='/update/:id' element={<UpdateNote setDataChange={setDataChange} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
