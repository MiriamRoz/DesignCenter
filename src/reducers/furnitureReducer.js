const INITIAL_STATE={

}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "SAVE_FURNITURE":
            console.log("action.payload",action.payload);
            return{...state}
        default:
            return state;
    }
}