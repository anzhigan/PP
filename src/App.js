import app_class from './App.module.css';

import Header from './comp/Header';
import Sections from './comp/Sections';
import Main from './comp/cp_page/Main';
import Products from './comp/products_page/Products';
import Statistic from './comp/statistic_page/Statistic';
import {BrowserRouter, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className = {app_class.app_wrapper}>
        <Header />
        <Sections />
        <div classNmae = 'app_wrapper_content'>
          <Route path = '/cp_page/Main'component = {Main}/>
          <Route path = '/products_page/Products' component = {Products}/>
          <Route path = '/statistic_page/Statistic' component = {Statistic}/>
        </div> 
      </div>
    </BrowserRouter>
  );
}


export default App;
