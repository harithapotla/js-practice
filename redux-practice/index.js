const { createStore,combineReducers } = require("react-redux")
const initialState = {
    numOfLaptops : 100
}

const initialMobile = {
    numOfMobiles:1000
}

const BUY_LAPTOP="BUY_LAPTOP";
const BUY_MOBILE="BUY_MOBILe";

const buyLaptops =()=> {
    return {
        type:BUY_LAPTOP
    }
}

const buyMobile = ()=>{
    return{
        type:BUY_MOBILE
    }
}

const laptopReducer=(state=initialState,action)=>{
    if(action.type===BUY_LAPTOP){
        return{
            numOfLaptops:state.numOfLaptops-1
        }
    }
    else {
        return state
    }
}

const mobileReducer=(state=initialMobile,action)=>{
//here i am using switch statement
switch(action.type){
    case BUY_MOBILE: return {numOfMobiles:state.numOfMobiles-1}

    default:return state;
}
}
const rootReducer = combineReducers({laptop:laptopReducer,mobile:mobileReducer})
const store = createStore(rootReducer)
console.log(store);