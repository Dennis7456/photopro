import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import { createContext, useEffect, useState } from 'react';
import httpClient from './config/httpClient';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Albums from './pages/Albums/Albums';
import BgPhoto from './assets/userimages/bee-7707052.jpg';
import Footer from './pages/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Register from './pages/Register/Register';
import { UserProvider } from './context/UserContext';
import UserProfile from './pages/UserProfile/UserProfile';
import Dashboard from './components/dashboard/Dashboard';
import Cookies from "universal-cookie";
import Header from './pages/Header/Header';
import MyAlbums from './pages/MyAlbums/MyAlbums';
import Users from './pages/Users/Users';
import Photos from './pages/Photos/Photos';
import UserPage from './pages/UserPage/UserPage';
import OtherPhotos from './pages/OtherPhotos/OtherPhotos';
import EditPhoto from './pages/EditPhoto/EditPhoto';
import AllPhotos from './pages/AllPhotos/AllPhotos';
import Viewphoto from './pages/Viewphoto/Viewphoto';
const cookies = new Cookies();

const token = cookies.get('TOKEN')

interface UserInterface {
  id: string,
  email: string
}

const App = () => {

  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
      <section className='px-6 py-4 bg-surface dark:bg-on_background'>
        { token ? <Header /> : <NavigationBar /> }
      </section>

      <Routes>
        { }
        <Route path='/' element={
          <section className='flex justify-around from-secondary-container p-20 h-55 bg-image'>
            <div>
              <p className='tracking-wider text-5xl pr-10 text-on_primary text-left'>Create and share</p>
              <p className='tracking-wider text-5xl mt-10 text-on_primary text-left'>amazing photos</p>
              <p className='text-5xl tracking-wider mt-10 text-left'>on our website</p>
              <p className='text-lg py-10 italic text-xl'>Post your artwork and show the world what you can create!</p>
            </div>
            <div className=''>
            </div>
          </section>
        }>
        </Route>
        <Route path='/albums' element={<Albums/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<UserProfile/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/myalbums' element={<MyAlbums/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/photos/:albumId' element={<Photos/>}></Route>
        <Route path='/otherphotos/:albumId' element={<OtherPhotos/>}></Route>
        <Route path='/editphoto/:photoId' element={<EditPhoto/>}></Route>
        <Route path='/user/:userId' element={<UserPage/>}></Route>
        <Route path='/viewphoto/:photoId' element={<Viewphoto/>}></Route>
      </Routes>
      <section className='dark:bg-on_background'><Footer/></section>
      </UserProvider>
      </ThemeProvider>
      </div>
  );
}

export default App;
