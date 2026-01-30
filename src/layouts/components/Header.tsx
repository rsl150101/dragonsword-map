import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Dracarta</Logo>
      <Nav></Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 60px;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #444;
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: default;
`;

const Nav = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  cursor: pointer;
`;
