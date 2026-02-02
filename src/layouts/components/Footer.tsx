import styled from "styled-components";

const FooterContainer = styled.footer`
  height: auto;
  padding: 20px;
  background-color: #222;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-align: center;
  gap: 10px;
  border-top: 1px solid #444;
  user-select: none;

  strong {
    color: #e0e0e0;
    font-weight: bold;
  }
`;

const Copyright = styled.div`
  color: #888;
`;

const Disclaimer = styled.div`
  font-size: 0.7rem;
  line-height: 1.4;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} <strong>Dracarta</strong>. Developed by Ding.
      </Copyright>

      <Disclaimer>
        Dragon Sword의 모든 이미지 저작권은 <strong>Hound13 & Webzen</strong> 에 있습니다.
        <br />
        Dracarta는 비공식 팬 프로젝트이며, 게임 개발사와 관련이 없습니다.
      </Disclaimer>
    </FooterContainer>
  );
};

export default Footer;
