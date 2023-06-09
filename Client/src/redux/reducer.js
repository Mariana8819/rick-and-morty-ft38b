
const initialState={
    myFavorites:[],       // que renderizo
    allCharacters:[] ,     // todos mis favoritos
    errors: false
}

//............................................................................................
//const reducer=(state=initialState , action)=>{
//    switch(action.type){
        // case "ADD_FAV":
        //     return{
        //         ...state,
        //         myFavorites:[...state.allCharacters, action.payload],
        //         allCharacters:[...state.allCharacters, action.payload]

        // case "REMOVE_FAV":
        //     return{
        //         ...state,
        //         myFavorites: state.myFavorites.filter(fav=> fav.id!== Number(action.payload))
        //     } 
        //export default reducer;
//...............................................................................................................
        //a partir m3/ej 05 remplazo el case ADD_FAV Y REMOV_FAV copio y pego:
 export default function reducer(state=initialState , {type, payload}){     // action = {type, payload}
    switch(type){   

        case 'ADD_FAV':
              return { ...state, myFavorites: payload, allCharacters: payload, errors: false };
            

        case 'REMOVE_FAV':
              return { ...state, myFavorites: payload, errors: false };  
              
        case "ERROR":
            return{
                ...state, errors: payload
            }      
       
        case "FILTER":
            const allCharactersFiltered=state.allCharacters.filter
            ((char)=> char.gender===payload)
            return{
                ...state,
                myFavorites: allCharactersFiltered 
            }
        case "ORDER":
            const allCharacters =[...state.allCharacters];
        return{
            ...state,
            myFavorites: payload === "A"
            ? allCharacters.sort((a,b)=> a.id - b.id)
            : allCharacters.sort((a,b)=> b.id - a.id)
        }

     default:
        return {...state}
}
};

