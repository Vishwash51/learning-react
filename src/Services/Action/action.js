import {ADD_Number} from '../Constants';
import {ADD_TO_CART} from '../Constants';

export default function Sum(data) {
    debugger
    let total=parseInt(data.first)+parseInt(data.Second);
        return{
        type:ADD_Number,
    data:total
    }
}

export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}