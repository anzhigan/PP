import sections_class from '../style/Sections.module.css';
import {NavLink} from "react-router-dom"

function Sections() {
  return (
    <div className={sections_class.sections}>
      
      <div className="sections_unit">
        <NavLink to = "/cp_page/Main" activeClassName={sections_class.active}><h3>Список КП</h3></NavLink>
      </div>
      
      <div className="sections_unit">
        <NavLink to = "/statistic_page/Statictic" activeClassName={sections_class.active}><h3>Статистика</h3></NavLink>
      </div>
      
      <div className="sections_unit">
        <NavLink to = "/products_page/Products" activeClassName={sections_class.active}><h3>Товары</h3></NavLink>
      </div>

    </div>
  );    
}


export default Sections;