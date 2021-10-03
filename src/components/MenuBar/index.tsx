import { Container, LogoContainer, LogoImg, Menu, MenuIconOption, OptionMenu } from "./styles";

export function MenuBar() {
    return (
          <Container>
              <LogoContainer>
                  <LogoImg src='/images/monetus.logo.symbol.png' alt='logo' loading='lazy'/>
              </LogoContainer>
              <Menu>
                  <OptionMenu selected={true} style={OptionMenu.active}>
                  <MenuIconOption src='/images/icon-home.png' alt='logo' loading='lazy'/>
                  </OptionMenu>

                  
             </Menu>
          </Container>
    );
}