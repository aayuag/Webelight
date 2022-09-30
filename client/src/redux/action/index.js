//To add items in Cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload :product
    }
}

//To delete items in Cart
export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload :product
    }
}