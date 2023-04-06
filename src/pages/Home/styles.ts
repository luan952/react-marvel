
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  margin: 0 auto;
  height: 100vh;
  box-sizing: border-box;
  .button {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    >button {
      background-color: ${({ theme }) => theme.COLORS.RED};
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 13rem;
      height: 2.5rem;
      border-radius: 1rem ;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  height: 6rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding: 0 4rem;
  z-index: 999; 
  .logo {
    display: flex;
    align-items: center;

    >svg {
      width: 10rem;
      height: auto;
    }
  }
  .profile {
    display: flex;
    gap: 1rem;
    align-items: center;
    >img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    .profile_name {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1rem;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      >strong {
        font-weight: 600;
      }
    }
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 8rem 2rem 2rem 2rem;

`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-row-gap: 20px;
  justify-items: center;
  padding: 2rem 0rem;
`;