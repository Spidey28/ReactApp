import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from "./Components/Footer";
import './tailwind.css'
// import ConterExample from './Components/CounterExample'

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name='World!' />
      <Footer />
      {/* <ConterExample/> */}
    </div>
  );
}

export default App;
