import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  WrapperNav,
  Link,
} from './SharedLayout.styles';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
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
      </Header>

      <Outlet />

      <footer>Footer</footer>
    </Container>
  );
};

export default SharedLayout;
