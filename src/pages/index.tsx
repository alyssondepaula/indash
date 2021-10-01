import type { NextPage } from 'next'
import { CardEmpresa } from '../components/CardEmpresa'
import { MenuBar } from '../components/MenuBar'
import { RightBar } from '../components/RightBar'
import {Container, MainContent} from './styles'

const Home: NextPage = () => {
  return (<>
    <Container>
    <MenuBar/>
      <MainContent>

        <CardEmpresa/>
      </MainContent>
     <RightBar/>
     </Container>
    </>
  )
}

export default Home
