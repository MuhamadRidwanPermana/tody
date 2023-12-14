// import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Navbar from "./Navbar";
import Categories from "./Categories";

export default function App() {

  return (
    <div className="app">
      <Navbar />
      <Categories />
    </div>
  )
}
