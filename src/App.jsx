import React from 'react';
import Header from './components/Header';
import Location from './components/Location';
import ItemsForSale from './components/ItemsForSale';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div>
      <Header className=""/>
      <div  id="about">
      <Content />
      </div>
      <div id="location">
      <Location  />
      </div>
      <div id="items">
      <ItemsForSale />
      </div>
      <div id="contact">
      <Footer  />
      </div>
    </div>
  );
}

export default App;
