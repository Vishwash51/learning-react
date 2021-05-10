import {ADD_Number} from '../Constants';

export default function Sum(data) {
    debugger
    let total=parseInt(data.first)+parseInt(data.Second);
        return{
        type:ADD_Number,
    data:total
    }
}