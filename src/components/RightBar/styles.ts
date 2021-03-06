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
   margin-top: 2rem;
   margin-bottom: 2rem;
`;

export const Text = styled.text`
   color: var(--color-gray003);
   font-size: 1.12rem;
   margin-left: .5rem;
   font-weight: 700;
`;

export const Star = styled.img`
   width: 1.68rem;
   height: 1.68rem;
`;

export const FavoriteList = styled.ul`
   width: 100%;
   height: 100%;
   overflow:hidden; 
   overflow-y:scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const FavoriteView = styled.li`
   display: flex;
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 2rem;

   cursor: pointer;
`;

export const Trash = styled.input`
   width: 1.68rem;
   height: 1.68rem;
   margin-left: 0.68rem;
   cursor: pointer;
`;

