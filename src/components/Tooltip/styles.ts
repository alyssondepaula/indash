import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 5rem;
  height: 2rem;
  background-color: var(--color-primary);
  border-radius: .3rem;
  align-items: center;
  justify-content: center;
  

  &::before {
      content: "";
      width: 0;
      height: 0;
      left: 2rem;
      top:  1.5rem;
      position: absolute;
      border: 6px solid transparent;
      transform: rotate(135deg);
      transition: border 0.4s ease-in-out;
      background-color: var(--color-primary);
    

   }
`;

export const Text = styled.text`
  font-weight: 700;
  font-size: .75rem;
  align-self: center;
  color: var(--color-white);
`;