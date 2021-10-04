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


    const removeFavorite = (symbol: string) => {
        
         dispatch({
              type: 'DEL_FAVORITE',
              payload: symbol
         })
         Swal.fire({
          position: 'top-end',
          html: `Ação ${symbol} removida dos seus Favoritos!`,
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


                         return <FavoriteView  key={item.symbol}>
                             
                              <CardEmpresa 
                              
                              symbol={item.symbol}
                              companyName={item.companyName}
                              changePercent={item.changePercent}
                              latestPrice={item.latestPrice} 
                              sourceImg={item.sourceImg} 
                              

                              />
                              <Trash 
                              onClick={()=>removeFavorite(item.symbol)}
                              type="image" src='/images/trash.svg'
                              />
                        </FavoriteView> 
                      })
                 }
               
               </FavoriteList>

          </Container>
    );
}