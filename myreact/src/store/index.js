import {createStore} from "redux"

let reducer=(state={},action)=>{
    let newState=state
    switch (action.type){
        case "ADD_del":
            newState=action.item
            return newState
        default:return newState
    }
}

let store=createStore(reducer)
window.store=store
export default store