import '../style/Header.css';

function Header() {
  return (
    <header class="header">
      <div class="header-container">
        <div class="nav">
          <a href="#">
            <img src="/img/logo.png"/>
          </a>
          <div id="users_data">
            <a href="#">Дмитрий Анжиганов</a>
            <a href="#">
              <img class="users_img" src="/img/U-LTtsa6IaM 1.png"/>
            </a>
          </div>
        </div>  
      </div>
    </header>);    
}


export default Header;