import { Container, QuotechangePercent, QuotechangePercentImg, QuoteImg, QuoteInfo, QuoteName, QuoteSymbol } from "./styles";
import React from "react";
import { useFetch } from "../../hooks/useFetch";


interface ICardEmpresaProps {
  symbol: string;
  companyName: string;
  changePercent: number;
  latestPrice: number; 
  sourceImg: string; 
}

interface IQuote {
  symbol: string;
  companyName: string;
  changePercent: number;
  latestPrice: number; 
}

export const CardEmpresa: React.FC<ICardEmpresaProps> = ({symbol, companyName,changePercent,latestPrice, sourceImg}) => { 

  const { data } = useFetch(`/${symbol}/quote/`);

  console.log(data)

  const changeFormat = changePercent.toLocaleString('pt-BR', { style: 'decimal' });

  const isUp = changePercent >= 0 ? true : false

  


   return <Container>
     <QuoteImg src={sourceImg} style={{ width: '2.81rem', height: '2.81rem', }}/>
     <QuoteInfo>
       <QuoteSymbol>{data?.symbol}</QuoteSymbol>
       <QuoteName>{data?.companyName}</QuoteName>
     </QuoteInfo>
     <QuotechangePercent>
     {isUp ? '+' : '-'}{changeFormat}%

       <QuotechangePercentImg style= {{ color: isUp ? 'var(--color-primary)' : 'var(--color-secondary)' }}
       src={isUp ? '/images/graph-up.svg' : '/images/graph-down.svg'} />
     </QuotechangePercent>
   </Container>
}