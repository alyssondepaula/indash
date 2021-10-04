import { CardEmpresa } from "../CardEmpresa";
import { Avatar, AvatarContainer, Chevron, Container, Text } from "./styles";

export function ProfileBar() {
    return (
          <Container>
              <AvatarContainer>
              <Avatar src='/images/avatar.svg'/>
              </AvatarContainer>
             <Text>João da Silva Almeida Magalhães</Text>
             <Chevron src='/images/chevron-down.svg'/>
          </Container>
    );
}