import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuoteSymbol = styled.text`
   font-size: 1rem;
   color: var(--color-gray003);
   font-weight: 700;
`;

export const QuoteName = styled.text`
   font-size: .75rem;
   color: var(--color-gray002);
   font-weight: 400;
`;