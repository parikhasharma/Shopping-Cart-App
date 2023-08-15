import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchData=()=>{
    return async(dispatch)=>{
        const fetchHandler=async()=>{
            const res=await fetch('https://redux-http-57b49-default-rtdb.firebaseio.com/cartItems.json')
            const data=res.json();
            return data;
        }
        try {
            const cartData=await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        } catch (error) {
            dispatch(uiActions.showNotification({
                open:true,
                message:'Sending Request Failed',
                type:'error'
              }))
        }
    }
}

export const sendCartData= (cart)=>{
    return async(dispatch)=>{
        dispatch(
            uiActions.showNotification({
                open:true,
                message:'Sending request',
                type:'warning',
            })
        );
        const sendRequest=async ()=>{
            dispatch(uiActions.showNotification({
              open:true,
              message:'Sending Request',
              type:'warning'
            }))
            const res=await fetch('https://redux-http-57b49-default-rtdb.firebaseio.com/cartItems.json',{
              method:"PUT",
              body:JSON.stringify(cart)
            })
            const data=res.json();
            console.log(data);
            dispatch(uiActions.showNotification({
              open:true,
              message:'Sent Request to the Database Successfully',
              type:'success'
            }))
          };
          try {
            await sendRequest();
          } catch (error) {
            dispatch(uiActions.showNotification({
                open:true,
                message:'Sending Request Failed',
                type:'error'
              }))
          }
    }

}