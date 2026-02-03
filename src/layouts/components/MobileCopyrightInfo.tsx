import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: #636e7b;
  font-size: 10px;
  line-height: 1.5;
  strong {
    color: #aeb9c6;
    font-weight: 600;
  }
`;

const Copyright = styled.div`
  color: #888;
`;

const Disclaimer = styled.div`
  margin-top: 8px;
  opacity: 0.8;
  font-size: 9px;
`;

export function CopyrightInfo() {
  return (
    <Container>
      <Copyright>
        &copy; {new Date().getFullYear()} <strong>Dracarta</strong>. Developed by Ding.
      </Copyright>
      <Disclaimer>
        Dragon Sword의 모든 이미지 저작권은 <br />
        <strong>Hound13 & Webzen</strong> 에 있습니다.
      </Disclaimer>
    </Container>
  );
}
