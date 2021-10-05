import type { NextPage } from 'next'
import { RecentCompaniesCards } from '../components/CompaniesCards'
import { MenuBar } from '../components/MenuBar'
import { RightBar } from '../components/RightBar'
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';
import Marquee from "react-fast-marquee";
import {Container, 
        HeadingPageContainer, 
        Icon, InputContainer, 
        MainContent, 
        Text, 
        IconContainer, 
        ChartContainer, 
        RecentCompaniesContainer,
        InfoNumbers, 
        DescritionInfo, 
        TextInfo, 
        HeadingFooterPageContainer,
        Input,
        QuotechangePercentImg
       } from './styles'
import { IRecentCompanies } from '../store/reducers/recentCompanies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { IFavorite } from '../store/reducers/favorites';
import Swal from 'sweetalert2';
import { getQuote } from '../services/getQuote';
import { getQuoteGraph } from '../services/getQuoteGraph';
import { QuoteDetails } from '../components/QuoteDetails';
import { FormEvent, useState } from 'react';
import { getQuoteSupport } from '../services/getQuotesSupport-FAKE';
import { CustomTooltip } from '../components/Tooltip';
import { IQuoteSelected } from '../store/reducers/quoteSelected';

const Home: NextPage = () => {


  const [search, setSearch] = useState("");


  const date = new Date();



  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();


  const sunday = date.getDay() == 0 && true;
  const saturday = date.getDay() == 6 && true;


  if(sunday) { dd = String(date.setDate(date.getDate()-2))};
  if(saturday) { dd = String(date.setDate(date.getDate()-1))};



  const nowFormat = `${yyyy}${mm}${dd}`;

  

  const recents: IRecentCompanies[] = useSelector((state: RootState) => state.recentCompanies.data);
  const favorites: IFavorite[] = useSelector((state: RootState) => state.favorite.data);
  const selected: IQuoteSelected = useSelector((state: RootState) => state.quoteSelected.data);

  const quote = getQuote(selected.symbol, true, 'symbol,companyName,change,changePercent,latestPrice');
  const quoteIsUp = quote?.changePercent >= 0 ? true : false

  const graphData = getQuoteGraph(selected.symbol,30,nowFormat, 'minute,close' )
  const changeFormat = quote?.changePercent.toFixed(2).toLocaleString('pt-BR', { style: 'decimal' });

  const dispatch = useDispatch();

  const AddFavorite = (item: IFavorite) => {
        
    dispatch({
         type: 'ADD_FAVORITE',
         payload: item
    }) 
  }

  const RemoveFavorite = (item: IFavorite) => {

        
    dispatch({
         type: 'DEL_FAVORITE',
         payload: item
    });
    
    Swal.fire({
      position: 'top-end',
      html: `Ação ${item.symbol} removida dos seus Favoritos!`,
      timer: 1200,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }})
    
  }

  

  const handleFavorite = (item: IFavorite) => {
    isFavorite(item) ? RemoveFavorite(item) : AddFavorite(item)
  }

  const isFavorite = (item: IFavorite | IQuoteSelected) => {
    return favorites.includes(item)
  }

  const UpdateSelected = (symbol: string) => {


       
    dispatch({
         type: 'UPDATE_QUOTE',
         payload: symbol
    })
  }


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    const getQuote = getQuoteSupport(search.toLowerCase());

    if(getQuote) {
      UpdateSelected(getQuote);
    }else {
    
      Swal.fire({
        position: 'top',
        html: `Ainda não trabalhamos com ações dessa empresa`,
        timer: 1200,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        }
      })

    }
    setSearch('');
  }

  return (<>
    <Container>

      <MainContent>

        <HeadingPageContainer>
          <Icon type='image' src='/images/icon-dashboard.png' alt='Logo Dashboard' style={{marginRight: '.5rem'}}/>
          <Text style={{fontSize: '1.75rem'}}>Dashboard</Text>
        </HeadingPageContainer>

        <InputContainer onSubmit={handleSubmit}>
           <Input 
           placeholder="Buscar empresa" 
           onChange={(e) => setSearch(e.target.value)}
           value={search}
           />
          <IconContainer> 
          <Icon type='image'src='/images/search.png' alt='Search Icon'  />
          </IconContainer>
        </InputContainer>


        <ChartContainer >
          <InfoNumbers>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon 
          onClick={()=>handleFavorite(selected)}
          type='image'
          src={isFavorite(selected) ? '/images/star.svg' : '/images/Star2.svg'  }
          alt='star Icon'
          style={{marginRight: '.5rem'}}
          />
          <DescritionInfo>
          <QuoteDetails  quoteName={quote?.symbol} quoteSymbol={quote?.companyName}/>
          </DescritionInfo>
          </div>
      

          <DescritionInfo>
          <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <QuotechangePercentImg
       src={quoteIsUp ? '/images/graph-up.svg' : '/images/graph-down.svg'} />
          <TextInfo>${quote?.latestPrice}</TextInfo>
          </div>
          <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TextInfo style= {{ color: quoteIsUp ? 'var(--color-sucess)' : 'var(--color-secondary)' }}>${quote?.change}</TextInfo>
          <TextInfo style= {{ color: quoteIsUp ? 'var(--color-sucess)' : 'var(--color-secondary)' }}>({changeFormat}%)</TextInfo>
          </div>
          </DescritionInfo>
          </InfoNumbers>

        <AreaChart width={950} height={300} data={graphData}
            margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
            
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0047BB" stopOpacity={0.46}/>
                <stop offset="95%" stopColor="#0047BB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="minute" />
            <YAxis type="number" domain={['dataMin - 5', 'dataMax + 1']}interval='preserveStartEnd' dataKey="close" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip  />}/>
            <Area type="monotone" dataKey="close" stroke="#0047BB" fillOpacity={1} fill="url(#colorUv)" activeDot={{ r: 10 }} />
          </AreaChart>

        </ChartContainer>
          <RecentCompaniesContainer>
            <HeadingFooterPageContainer>
              <Icon type='image'src='/images/stats.svg' alt='Logo Dashboard'  style={{marginRight: '.5rem'}}/>
              <Text style={{fontSize: '1.12rem'}}>Empresas Recentes</Text>
            </HeadingFooterPageContainer>

            
            <Marquee pauseOnHover={true} style={{display: 'flex', flexDirection: 'row', width: '62rem', marginTop: '1rem'}}>
            {
              recents.map((item)=> {


                
                return <RecentCompaniesCards key={item.symbol} symbol={item.symbol}>
                  <Icon 
                  onClick={()=>handleFavorite(item)}
                  type='image'
                  src={isFavorite(item) ? '/images/star.svg' : '/images/Star2.svg'  }
                  alt='Logo Dashboard'
                  style= {{marginRight: '.75rem'}}/>
                </RecentCompaniesCards>
              })
            }
            </Marquee>
          </RecentCompaniesContainer>
      </MainContent>
    
     </Container>
    </>
  )
}

export default Home
