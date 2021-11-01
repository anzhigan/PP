import '../style/App.css';

import Header from './Header';
import Main from './Main';
import Sections from './Sections';


function App() {
  return (
    <div className = "app-wrapper">
      <Header />
      <Sections />
      <Main />
    </div>
    
  );
}


export default App;
