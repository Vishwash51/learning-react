import {ADD_Number,ADD_TO_CART} from '../Constants'

const initialState = {
    Mathematical: [],
    cardData:[]
}

export default function Sum_(state=[],action) {
    debugger
    switch(action.type){
        case ADD_Number :
            console.log('action return'+state)
            return [
                ...state,
                {Mathematical:action.data}
            ] ;
            break;
            case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            break;
            default:
                    return state
                
    }
    
}

// export function AddToCart(state=[],action) {
//     debugger
//     switch(action.type){
//             case ADD_TO_CART:
//             // console.warn("reducer",action)
//             return [
//                 ...state,
//                 {cardData: action.data}
//             ]
//             break;
//             default:
//                     return state
                
//     }
    
// }
