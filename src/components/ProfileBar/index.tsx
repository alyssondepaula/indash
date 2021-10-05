import { IUSer } from "../../store/reducers/user";
import { Avatar, AvatarContainer, Chevron, Container, Text } from "./styles";

interface IProfileBarProps {
    name: string
    email: string
    password: string
    token: string
    refreshToken: string
  }

export function ProfileBar<IProfileBarProps>({name} :any) {
    return (
          <Container>
              <AvatarContainer>
              <Avatar src='/images/avatar.svg'/>
              </AvatarContainer>
             <Text>{name}</Text>
             <Chevron src='/images/chevron-down.svg'/>
          </Container>
    );
}