import { Container, QuotechangePercent, QuotechangePercentImg, QuoteImg, QuoteInfo } from "./styles";
import React from "react";
import { getQuote } from "../../services/getQuote";
import { QuoteDetails } from "../QuoteDetails";


interface ICardEmpresaProps {
  symbol: string;
  onClick(): void;
}


export const CompanieCards: React.FC<ICardEmpresaProps> = ({symbol, onClick}) => { 

 //const { data } = useFetch(`/${symbol}/quote/`, { displayPercent: true, filter: 'symbol,companyName,changePercent,latestPrice'  });

  const data = getQuote(symbol, true, 'symbol,companyName,changePercent,latestPrice');

  const changeFormat = data?.changePercent.toFixed(2).toLocaleString('pt-BR', { style: 'decimal' });

  const isUp = data?.changePercent >= 0 ? true : false

  


   return <Container onClick={onClick}>
     <QuoteImg src={`/images/companies/${symbol}.svg`} style={{ width: '2.81rem', height: '2.81rem', }}/>
     <QuoteInfo>
       <QuoteDetails  quoteName={data?.symbol} quoteSymbol={data?.companyName}/>
     </QuoteInfo>
     <QuotechangePercent isUp={isUp}>
       {isUp ? '+' : ''}{changeFormat}%
     <QuotechangePercentImg style= {{ color: isUp ? 'var(--color-primary)' : 'var(--color-secondary)' }}
       src={isUp ? '/images/graph-up.svg' : '/images/graph-down.svg'} />
     </QuotechangePercent>
   </Container>
}


export const RecentCompaniesCards: React.FC<{symbol: string}> = ({symbol, children}) => { 

  //const { data } = useFetch(`/${symbol}/quote/`, { displayPercent: true, filter: 'symbol,companyName,changePercent,latestPrice'  });

  const data = getQuote(symbol, true, 'symbol,companyName,changePercent,latestPrice');

  const changeFormat = data?.changePercent.toFixed(2).toLocaleString('pt-BR', { style: 'decimal' });

  const isUp = data?.changePercent >= 0 ? true : false

  


   return <Container style={{marginRight: '1.31rem', width: '18.68rem'}}>
      {children}
     <QuoteImg src={`/images/companies/${symbol}.svg`} style={{ width: '2rem', height: '2rem', }}/>
     <QuoteInfo>
     <QuoteDetails  quoteName={data?.symbol} quoteSymbol={data?.companyName}/>
     </QuoteInfo>
     <QuotechangePercent isUp={isUp}>
     {isUp ? '+' : ''}{changeFormat}%

       <QuotechangePercentImg style= {{ color: isUp ? 'var(--color-primary)' : 'var(--color-secondary)' }}
       src={isUp ? '/images/graph-up.svg' : '/images/graph-down.svg'} />
     </QuotechangePercent>
   </Container>
}