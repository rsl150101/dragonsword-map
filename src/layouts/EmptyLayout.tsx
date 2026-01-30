import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
`;

function EmptyLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
}

export default EmptyLayout;
