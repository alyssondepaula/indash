/* eslint-disable @next/next/link-passhref */
import { Container, LogoContainer, LogoImg, Menu, MenuIconOption, OptionMenu } from "./styles";
import Link from 'next/link';


export function MenuBar() {
    return (
          <Container>
              <LogoContainer>
                  <LogoImg src='/images/monetus.logo.symbol.png' alt='logo' loading='lazy'/>
              </LogoContainer>
              <nav>
              <Menu>
                <Link href="/" >
                 <OptionMenu>
                  <MenuIconOption src='/images/icon-home.png' alt='logo' loading='lazy'/>
                  </OptionMenu>
                </Link>
             </Menu>
             </nav>
          </Container>
    );
}

