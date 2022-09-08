export const incrementNumber = (num)=> {
    return{
        type:"INCREMENT",
        payload: num
    }
}  
export const decrementNumber = ()=>{
    return{
        type:"DECREMENT"
    }
}    