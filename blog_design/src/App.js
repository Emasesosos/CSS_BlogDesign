import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './css/fontawesome-all.min.css';
import './css/app.css';

function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
