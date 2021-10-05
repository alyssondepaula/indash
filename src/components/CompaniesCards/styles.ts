import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 20.12rem;
   height: 4.56rem;
   background-color: var(--color-white);


  
   -webkit-box-shadow: 2px 6px 15px 0px rgba(0,0,0,0.21); 
   box-shadow: 2px 6px 15px 0px rgba(0,0,0,0.21);
   padding: 1rem;

   flex-direction: row;
   border-radius: .5rem;
   align-items: center;
   justify-content: center;

   border: none;
   cursor: pointer;

`;

export const QuoteImg = styled.img`
   border-color: 1.40rem;
`;

export const QuoteInfo = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: space-between;
   margin-left: .75rem;
`;

export const QuotechangePercent = styled.text<{isUp: boolean}>`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   font-size: .75rem;
   color: ${props=> props.isUp ? 'var(--color-sucess)' : 'var(--color-secondary)'};
   font-weight: 700;
   
`;

export const QuotechangePercentImg = styled.img`
   border-color: 1.40rem;
`;