import styled from "styled-components";

export const Container = styled.div`

  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  >form {
    display: flex;
    gap: 1rem;
    align-items: center;
    >button {
      background-color: ${({ theme }) => theme.COLORS.RED};
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 6rem;
      height: 2rem;
      border-radius: 1rem ;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
    }
  }

  .search-input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  width: 200px;
  transition: all 0.3s;
}

.search-input:focus {
  border-color: ${({ theme }) => theme.COLORS.RED};
}
`;