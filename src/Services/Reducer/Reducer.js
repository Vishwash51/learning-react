import {ADD_Number} from '../Constants'

const initialState = {
    Mathematical: []
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
            default:
                    return state
                
    }
    
}