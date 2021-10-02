import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 24.625rem;
   height: 100vh;
   background-color: var(--color-white);
   flex-direction: column;
   align-items: center;
   padding: 2rem 1.25rem;

`;

export const FavoritesHeading = styled.div`
   display: flex;
   width: 100%;
   height: 1.68;
   flex-direction: row;
   align-items: center;
   padding: 2rem 1.25rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
`;

export const Text = styled.h2`
   color: var(--color-gray003);
   font-size: 1.12rem;
   margin-left: .5rem;
`;

export const Star = styled.img`
   width: 1.68rem;
   height: 1.68rem;
`;

export const FavoriteList = styled.ul`
   width: 100%;

`;

export const FavoriteView = styled.div`
   display: flex;
   width: 100%;
   height: 4.56rem;
  

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   
`;

export const Trash = styled.img`
   width: 1.68rem;
   height: 1.68rem;

   cursor: pointer;
`;