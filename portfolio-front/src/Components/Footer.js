import { Link } from 'react-router-dom';
import { SidebarData } from '../Components/SiderData';
import { ContainerFooter, WrapperP, WrapperContainer } from '../Styled/StyledFooter';

function Footer() {
  return (
    <ContainerFooter>
      <WrapperContainer>
        {
          SidebarData.map((item, index) => {
            return (
              <li key={ index }>
                <Link to={ item.path }>
                  <span>{ item.title }</span>
                </Link>
              </li>
            );
          })
        }
      </WrapperContainer>
      <WrapperP>
        <p>© Copyright 2022 Lucas Cabral.</p>
      </WrapperP>
    </ContainerFooter>
  );
}

export default Footer;
