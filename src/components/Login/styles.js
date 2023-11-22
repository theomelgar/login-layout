import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100svh;
  font-family: 'Amatic SC', sans-serif;

  background: url(./pexels-joão-cabral-3299386.jpg) no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  backdrop-filter: blur(10px);
  
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 50svh;
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 100svh;
  transform: translate(50% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Drop = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.44);
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.44);
  margin: 0 auto;
  width: 30rem;
  height: 30rem;
  border-radius: 0% 100% 100% 100%;
  -webkit-transform: rotate(45deg);
  
  @media (max-width: 500px) {
    background:none;
    box-shadow:none;
    -webkit-transform: rotate(0deg);
  }
`;

export const LoginForm = styled.div`
  -webkit-transform: rotate(-45deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 7rem;
  font-size: 50px;
  font-weight: 700;
  color: #000000;
  input {
    background: none;
    color: #000000;
    font-size: 20px;
    padding: 1rem;
  }
  label {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    -webkit-transform: rotate(0deg);
    color: #ffffff;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.44);
    padding: 1rem;
    input{
      color: #ffffff;
      background: #000000;
    }
  }
`;

export const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  
`;

export const PasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SPassword = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  position: relative;
`;

export const ShowPassword = styled.span`
  cursor: pointer;
  background: none;
  position: absolute;
  top: -1.2rem;
  right: 0.6rem;
  width: 1.5rem;
  height: 1.2rem;
`;
