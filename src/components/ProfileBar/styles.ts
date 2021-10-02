import styled from 'styled-components';

export const Container = styled.button`
   width: 100%;
   height: 2.5rem;
   background-color: var(--color-background);

   cursor: pointer;
   border-width: 1px;
   border-color: var(--color-primary);

   flex-direction: row;
   border-radius: 7.5rem;

`;

export const Text = styled.h6`
   color: var(--color-primary);
   font-size: 1rem;
`;
