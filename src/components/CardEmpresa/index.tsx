import { Container, QuotechangePercent, QuotechangePercentImg, QuoteImg, QuoteInfo, QuoteName, QuoteSymbol } from "./styles";
import React from "react";
import { useFetch } from "../../hooks/useFetch";


interface ICardEmpresaProps {
  symbol: string;
}


export const CardEmpresa: React.FC<ICardEmpresaProps> = ({symbol}) => { 

  const { data } = useFetch(`/${symbol}/quote/`, { displayPercent: true, filter: 'symbol,companyName,changePercent,latestPrice'  });

  const changeFormat = data?.changePercent.toLocaleString('pt-BR', { style: 'decimal' });

  const isUp = data?.changePercent >= 0 ? true : false

  


   return <Container>
     <QuoteImg src={`/images/companies/${symbol}.svg`} style={{ width: '2.81rem', height: '2.81rem', }}/>
     <QuoteInfo>
       <QuoteSymbol>{data?.symbol}</QuoteSymbol>
       <QuoteName>{data?.companyName}</QuoteName>
     </QuoteInfo>
     <QuotechangePercent>
     {isUp ? '+' : ''}{changeFormat}%

       <QuotechangePercentImg style= {{ color: isUp ? 'var(--color-primary)' : 'var(--color-secondary)' }}
       src={isUp ? '/images/graph-up.svg' : '/images/graph-down.svg'} />
     </QuotechangePercent>
   </Container>
}


export const RecentCompaniesCards: React.FC<{symbol: string}> = ({symbol, children}) => { 

  const { data } = useFetch(`/${symbol}/quote/`, { displayPercent: true, filter: 'symbol,companyName,changePercent,latestPrice'  });

  const changeFormat = data?.changePercent.toLocaleString('pt-BR', { style: 'decimal' });

  const isUp = data?.changePercent >= 0 ? true : false

  


   return <Container style={{marginRight: '1.31rem', width: '18.68rem'}}>
      {children}
     <QuoteImg src={`/images/companies/${symbol}.svg`} style={{ width: '2rem', height: '2rem', }}/>
     <QuoteInfo>
       <QuoteSymbol>{data?.symbol}</QuoteSymbol>
       <QuoteName>{data?.companyName}</QuoteName>
     </QuoteInfo>
     <QuotechangePercent>
     {isUp ? '+' : ''}{changeFormat}%

       <QuotechangePercentImg style= {{ color: isUp ? 'var(--color-primary)' : 'var(--color-secondary)' }}
       src={isUp ? '/images/graph-up.svg' : '/images/graph-down.svg'} />
     </QuotechangePercent>
   </Container>
}