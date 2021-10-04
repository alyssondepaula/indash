import type { NextPage } from 'next'
import { CardEmpresa, RecentCompaniesCards } from '../components/CardEmpresa'
import { MenuBar } from '../components/MenuBar'
import { RightBar } from '../components/RightBar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Marquee from "react-fast-marquee";
import {Container, 
        HeadingPageContainer, 
        Icon, InputContainer, 
        MainContent, 
        Text, 
        IconContainer, 
        Input, 
        ChartContainer, 
        RecentCompaniesContainer,
        InfoNumbers, 
        DescritionInfo, 
        TextInfo, 
        HeadingFooterPageContainer
       } from './styles'
import { IRecentCompanies } from '../store/reducers/recentCompanies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { IFavorite } from '../store/reducers/favorites';
import Swal from 'sweetalert2';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const Home: NextPage = () => {

  const date = new Date();

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  const nowFormat = `${yyyy}${mm}${dd}`;

  console.log(nowFormat)

  const recents: IRecentCompanies[] = useSelector((state: RootState) => state.recentCompanies.data);
  const favorites: IFavorite[] = useSelector((state: RootState) => state.favorite.data);

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

  const handleFavorite = (isFavorite: boolean, item: IFavorite) => {

      isFavorite ? RemoveFavorite(item) : AddFavorite(item)

  }
  

  return (<>
    <Container>
    <MenuBar/>
      <MainContent>

        <HeadingPageContainer>
          <Icon type='image' src='/images/icon-dashboard.png' alt='Logo Dashboard'/>
          <Text style={{fontSize: '1.75rem'}}>Dashboard</Text>
        </HeadingPageContainer>

        <InputContainer>
           <Input placeholder="Buscar empresa"/>
          <IconContainer> 
          <Icon type='image'src='/images/search.png' alt='Search Icon' />
          </IconContainer>
        </InputContainer>


        <ChartContainer>
          <InfoNumbers>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon type='image'src='/images/Star2.svg' alt='star Icon'/>
          <DescritionInfo>
          <TextInfo>Dashboard</TextInfo>
          <TextInfo>Dashboard</TextInfo>
          </DescritionInfo>
          </div>
      

          <DescritionInfo>
          <TextInfo>Dashboard</TextInfo>
          <TextInfo>Dashboard</TextInfo>
          </DescritionInfo>
          </InfoNumbers>

        <AreaChart width={950} height={300} data={data}
            margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0047BB" stopOpacity={0.46}/>
                <stop offset="95%" stopColor="#0047BB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>

        </ChartContainer>
          <RecentCompaniesContainer>
            <HeadingFooterPageContainer>
              <Icon type='image'src='/images/stats.svg' alt='Logo Dashboard'/>
              <Text style={{fontSize: '1.12rem'}}>Empresas Recentes</Text>
            </HeadingFooterPageContainer>

            
            <Marquee pauseOnHover={true} style={{display: 'flex', flexDirection: 'row', width: '62rem', marginTop: '1rem'}}>
            {
              recents.map((item)=> {

                const isFavorite = favorites.includes(item)

                
                return <RecentCompaniesCards key={item.symbol} symbol={item.symbol}>
                  <Icon 
                  onClick={()=>handleFavorite(isFavorite,item)}
                  type='image'
                  src={isFavorite ? '/images/star.svg' : '/images/Star2.svg'  }
                  alt='Logo Dashboard'
                  style= {{marginRight: '.75rem'}}/>
                </RecentCompaniesCards>
              })
            }
            </Marquee>
          </RecentCompaniesContainer>
      </MainContent>
     <RightBar/>
     </Container>
    </>
  )
}

export default Home
