import './App.css';
import {Footer, Blog, Features, WhatGPT4, Header, Possibility} from './containers'
import {Article, Brand, CallToAction, Feature, Navbar} from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>  
      <Brand/>
      <WhatGPT4/> 
      <Features/> 
      <Possibility/> 
      <CallToAction/> 
      <Blog/> 
      <Footer/> 
     

    </div>
  );
}

export default App;
