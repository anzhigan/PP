import main_class from '../../style/cp_page/Main.module.css';

import Sections from '../Sections';
import CP_cards from './CP_cards';

function Main() {
  return (
    <div className = {main_class.main}>
      <CP_cards />
    </div>
  );    
}


export default Main;