import type { NextPage } from 'next'
import { CardEmpresa } from '../components/CardEmpresa'
import { MenuBar } from '../components/MenuBar'
import { RightBar } from '../components/RightBar'
import {Container, HeadingPageContainer, Icon, InputContainer, MainContent, Text, IconContainer, Input, ChartContainer, RecentCompaniesContainer} from './styles'

const Home: NextPage = () => {
  return (<>
    <Container>
    <MenuBar/>
      <MainContent>

        <HeadingPageContainer>
          <Icon src='/images/icon-dashboard.png' alt='Logo Dashboard' loading='lazy'/>
          <Text>Dashboard</Text>
        </HeadingPageContainer>

        <InputContainer>
           <Input/>
          <IconContainer> 
          <Icon src='/images/search.png' alt='Search Icon' loading='lazy'/>
          </IconContainer>
        </InputContainer>


        <ChartContainer/>



          <RecentCompaniesContainer>

          </RecentCompaniesContainer>
      </MainContent>
     <RightBar/>
     </Container>
    </>
  )
}

export default Home
