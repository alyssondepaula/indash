import type { NextPage } from 'next'
import { CardEmpresa } from '../components/CardEmpresa'
import { MenuBar } from '../components/MenuBar'
import { RightBar } from '../components/RightBar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

import {Container, HeadingPageContainer, Icon, InputContainer, MainContent, Text, IconContainer, Input, ChartContainer, RecentCompaniesContainer, InfoNumbers, DescritionInfo, TextInfo} from './styles'

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
  return (<>
    <Container>
    <MenuBar/>
      <MainContent>

        <HeadingPageContainer>
          <Icon src='/images/icon-dashboard.png' alt='Logo Dashboard' loading='lazy'/>
          <Text style={{fontSize: '1.75rem'}}>Dashboard</Text>
        </HeadingPageContainer>

        <InputContainer>
           <Input placeholder="Buscar empresa"/>
          <IconContainer> 
          <Icon src='/images/search.png' alt='Search Icon' loading='lazy'/>
          </IconContainer>
        </InputContainer>


        <ChartContainer>
          <InfoNumbers>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon src='/images/Star2.svg' alt='star Icon' loading='lazy'/>
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
            <HeadingPageContainer>
              <Icon src='/images/icon-dashboard.png' alt='Logo Dashboard' loading='lazy'/>
              <Text style={{fontSize: '1rem'}}>Empresas Recentes</Text>
            </HeadingPageContainer>
          </RecentCompaniesContainer>
      </MainContent>
     <RightBar/>
     </Container>
    </>
  )
}

export default Home
