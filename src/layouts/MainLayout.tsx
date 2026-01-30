import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: #000;
`;

function MainLayout() {
  return (
    <LayoutContainer>
      <Header />
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainWrapper>
      <Footer />
    </LayoutContainer>
  );
}

export default MainLayout;
