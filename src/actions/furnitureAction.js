import jwt_decode from "jwt-decode"; 

export const saveFurniture = (token) => {
    const fDetails = jwt_decode(token);
    localStorage.setItem("token", token);
    return ((dispatch)=>{
        dispatch({
            type: "SAVE_FURNITURE",
            payload: fDetails
        })
    })
}