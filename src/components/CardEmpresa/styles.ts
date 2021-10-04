import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex: 1;
   height: 4.56rem;
   background-color: var(--color-white);


  
   -webkit-box-shadow: 2px 6px 15px 0px rgba(0,0,0,0.21); 
   box-shadow: 2px 6px 15px 0px rgba(0,0,0,0.21);
   padding: 1rem;

   flex-direction: row;
   border-radius: .5rem;
   align-items: center;
   justify-content: center;

`;

export const QuoteImg = styled.img`
   border-color: 1.40rem;
`;

export const QuoteInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-left: .75rem;
`;

export const QuoteSymbol = styled.h4`
   font-size: 1rem;
   color: var(--color-gray003);
`;

export const QuoteName = styled.h5`
   font-size: .75rem;
   color: var(--color-gray002);
`;

export const QuotechangePercent = styled.h6`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   font-size: .75rem;
   margin-left: 5.5rem;
`;

export const QuotechangePercentImg = styled.img`
   border-color: 1.40rem;
`;