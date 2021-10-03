import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../store/actions/favorites";
import { RootState } from "../../store/reducers";
import { IFavorite } from "../../store/reducers/favorites";
import { CardEmpresa } from "../CardEmpresa";
import { ProfileBar } from "../ProfileBar";
import Swal from 'sweetalert2'
import { Container, FavoriteList, FavoritesHeading, FavoriteView, Star, Text, Trash } from "./styles";

export function RightBar() {
  
    const favorites: IFavorite[] = useSelector((state: RootState) => state.favorite.data);

    const dispatch = useDispatch();


    const removeFavorite = (id: number) => {
        
         dispatch({
              type: 'DEL_FAVORITE',
              payload: id
         })
         Swal.fire({
          position: 'top-end',
          html: `Ação ${id} removida dos seus Favoritos!`,
          timer: 1200,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          }
        })
    }


    return (
          <Container>
               <ProfileBar/>

               <FavoritesHeading>
                   <Star src='/images/star.svg'/>
                   <Text>Empresas favoritas</Text>
               </FavoritesHeading>
               <FavoriteList>
               
                 {
                      favorites.map((item: IFavorite) => {

                         return <li key={item.id}> 
                         <FavoriteView>
                             
                              <CardEmpresa/>
                              <Trash src='/images/trash.svg'/>
                              <button onClick={()=>removeFavorite(item.id)}>
                               <h3>{item.id}</h3>
                              </button>
                        </FavoriteView> 
                        </li>
                      })
                 }
               
               </FavoriteList>

          </Container>
    );
}