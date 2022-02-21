import { ActionType } from "../contants/action-types"

const initialSate={
    products:[{
        id:1,
        title:"Naimur",
        category:"programer",
    }]
}

export const productReducer=(state=initialSate,{type,payload})=>{
    switch(type){
        case ActionType.SET_PRODUCTS:
            return state
            default:
                    return state
      
    }
}