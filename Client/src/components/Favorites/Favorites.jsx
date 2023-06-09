import {connect, useDispatch} from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites=({myFavorites})=>{
const [aux, setAux]= useState (false);    

const dispatch= useDispatch();

const handleOrder = (e)=>{
    dispatch(orderCards(e.target.value))
    setAux(!aux)
}
const handlerFilter= (e)=>{
    dispatch(filterCards(e.target.value))
}

    return(
        <div>
            <select name="order"onchange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>       
            </select>
            <select name="filter" onchange={handlerFilter}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>                  
             </select>
            {myFavorites.map((fav)=>{
                    return(
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status} 
                        species={fav.species}
                        gender={fav.gender}
                        origen={fav.name.origen}
                        image={fav.image}
                        />
                    )
                })
             }
            
        </div>
    )
};

const mapStateToProps= (state)=>{
return{
    myFavorites: state.myFavorites
}
};

export default connect (mapStateToProps, null)(Favorites);