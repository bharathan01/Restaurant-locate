
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Rest from './components/Rest';
import { Route ,Routes } from 'react-router-dom';
import RestaurantView from './components/RestaurantView';
function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Rest />} />
        <Route path="viewrest/:id" element={<RestaurantView />} />

      </Routes>


      
      <Footer />

    </>
  );
}

export default App;
