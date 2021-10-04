import styled from 'styled-components';

export const Container = styled.button`
   display: inline-flex;
   width: 100%;
   height: 2.5rem;
   background-color: var(--color-background);

   cursor: pointer;
   border-width: 1px;
   border-color: var(--color-primary);

   flex-direction: row;
   border-radius: 7.5rem;
   align-items: center;
   justify-content: space-between;
   padding-top: .33rem;
   padding-left: .33rem;
   padding-right: .5rem;
   padding-bottom: .33rem;
   

`;

export const Text = styled.h6`
   color: var(--color-primary);
   font-size: 1rem;
`;

export const AvatarContainer = styled.div`
   width: 2rem;
   height: 2rem;
   padding: .05rem;
   background-color: var(--color-primary);
   border-radius: 1rem;
`;

export const Avatar = styled.img`
   width: 2rem;
   height: 2rem;
`;

export const Chevron = styled.img`
   width: 1rem;
   height: 1rem;
`;