import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sign from './sign';
import Target from './target';
import Direct from './direct';
import Tneb from './tneb';
import Tnpcb from './tnpcb';
import Road from './road';
import D1 from './d1';
import D2 from './d2';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Routes>
    <Route exact path='/' element={<App/>}></Route>
    <Route exact path='/sign' element={<Sign/>}></Route>
    <Route exact path='/target' element={<Target/>}></Route>
    <Route exact path='/direct'element={<Direct/>}></Route>
    <Route exact path='/tneb' element={<Tneb/>}></Route>
    <Route exact path='/tnpcb' element={<Tnpcb/>}></Route>
    <Route exact path='/road' element={<Road/>}></Route>
    <Route exact path='/d1' element={<D1/>}></Route>
    <Route exact path='/d2' element={<D2/>}></Route>
  </Routes>
</Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
