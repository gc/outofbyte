import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { breakpoints } from '../meta/theme';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 25px 20px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${breakpoints.down('sm')} {
    padding: 25px 15px;
  }
`;

const Main = styled.main`
  padding: 1rem 0px;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <Wrapper>
        <header>
          {location.pathname === rootPath ? (
            <h1 style={{ border: 'none' }}>
              <Link to="/">{title}</Link>
            </h1>
          ) : (
            <h3 style={{ marginTop: 0, border: 'none' }}>
              <Link to="/">{title}</Link>
            </h3>
          )}
        </header>
        <Main>{children}</Main>
        <footer>© {new Date().getFullYear()}, Out of Byte</footer>
      </Wrapper>
    );
  }
}

export default Layout;
