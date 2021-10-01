import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;
   background-color: var(--color-white);
   flex-direction: row;
   justify-content: space-between;
`;

export const MainContent = styled.div`
   flex: 1;
   background-color: var(--color-background);
   flex-direction: column;
   border-top-left-radius: 1.5rem;
   border-bottom-left-radius: 1.5rem;
`;
