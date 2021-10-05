import React from 'react';
import { Container, QuoteName, QuoteSymbol } from "./styles";

interface IQuoteDetails {
    quoteSymbol:string | undefined;
    quoteName:string | undefined;
}



export const QuoteDetails: React.FC<IQuoteDetails> = ({quoteName,quoteSymbol}) => {

  return <Container>
  <QuoteSymbol>{quoteSymbol}</QuoteSymbol>
  <QuoteName>{quoteName}</QuoteName>
  </Container>
}


