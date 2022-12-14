import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Components/SiderData';
import { useState } from 'react';
import '../Styled/Navbar.css';
import { IconContext } from 'react-icons';

function HeaderPage() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} data-testid='button-svg' />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={ index } className={ item.cName }>
                  <Link to={ item.path } data-testid={`link-${index}`}>
                    { item.icon }
                    <span data-testid={`title-${index}`}>{ item.title }</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default HeaderPage;
