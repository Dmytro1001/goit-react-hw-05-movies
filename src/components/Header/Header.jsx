import { NavLink } from 'react-router-dom';
import {
  HeaderContainer,
  Container,
  Logo,
  WrapperNav,
  Link,
} from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <WrapperNav>
          <NavLink to="/">
            <Logo />
          </NavLink>

          <nav>
            <ul>
              <li>
                <Link to="/" end>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </WrapperNav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
