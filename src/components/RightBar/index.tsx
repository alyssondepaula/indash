import { CardEmpresa } from "../CardEmpresa";
import { ProfileBar } from "../ProfileBar";
import { Container, FavoriteList, FavoritesHeading, FavoriteView, Star, Text, Trash } from "./styles";

export function RightBar() {
    return (
          <Container>
               <ProfileBar/>

               <FavoritesHeading>
                   <Star src='/images/star.svg'/>
                   <Text>Empresas favoritas</Text>
               </FavoritesHeading>
               <FavoriteList>
               <FavoriteView>
                    <CardEmpresa/>
                    <Trash src='/images/trash.svg'/>
               </FavoriteView>
               <FavoriteView>
                    <CardEmpresa/>
                    <Trash src='/images/trash.svg'/>
               </FavoriteView>
               <FavoriteView>
                    <CardEmpresa/>
                    <Trash src='/images/trash.svg'/>
               </FavoriteView>
               </FavoriteList>

          </Container>
    );
}