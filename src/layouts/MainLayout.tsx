import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import GuideModal from "../features/map/components/GuideModal";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const DesktopOnly = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  background: #2c323d;
  color: white;
  border: none;
  border-radius: 8px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  width: 300px;
  height: 100%;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1001;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    background: #2c323d;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.5);

    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: #000;
`;

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <LayoutContainer>
      <MobileMenuButton onClick={() => setIsSidebarOpen(true)}>
        <FaBars size={20} />
      </MobileMenuButton>
      <Overlay $isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
      <DesktopOnly>
        <Header />
      </DesktopOnly>
      <MainWrapper>
        <SidebarWrapper $isOpen={isSidebarOpen}>
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </SidebarWrapper>
        <ContentWrapper>
          <Outlet />
          <GuideModal />
        </ContentWrapper>
      </MainWrapper>
      <DesktopOnly>
        <Footer />
      </DesktopOnly>
    </LayoutContainer>
  );
}

export default MainLayout;
