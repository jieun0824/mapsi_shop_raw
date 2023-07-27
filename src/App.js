import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, navigate} from 'react-router-dom';
import Intro from '../src/pages/Intro';
import Main from '../src/pages/Main';
import Mapsi from '../src/pages/Mapsi';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
      <Routes>
        <Route path='/' element ={<Intro/>} />
        <Route path='/main' element = {<Main/>}/>
        <Route path='/mapsi_about' element = {<Mapsi/>}/>
      </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
