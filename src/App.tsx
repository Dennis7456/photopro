import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import { createContext } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Albums from './pages/Albums/Albums';
import Photos from './pages/Photos/Photos';

const App = () => {
  return (
    <div className="App">
      <section className='px-6 py-8 bg-surface'>
        <NavigationBar />
      </section>

      <Routes>
        <Route path='/' element={
          <section className='bg-gradient-to-r to-primary from-secondary-container flex justify-around items-center p-10 h-20'>
            <div>
              <p className='tracking-wider text-5xl pr-10'>Create amazing photos</p>
              <p className='text-5xl tracking-wider mt-10'>Using our website</p>
              <p className='text-lg py-10'>Post your artwork and show the world what you can create!</p>
            </div>
            <div>
              Bg Image
            </div>
          </section>
        }>
        </Route>
        <Route path='/photos' element={<Photos/>}></Route>
        <Route path='/albums' element={<Albums/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
