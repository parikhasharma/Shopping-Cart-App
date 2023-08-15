import React, { useState,useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "./components/Notification";
import { fetchData, sendCartData } from "./store/cartActions";

function App() {
  const [isFirstRender,setFirstRender]=useState(true)
  const dispatch=useDispatch();
  const notification=useSelector(state=>state.ui.notification)
  const cart=useSelector(state=>state.cart)
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)

  useEffect(()=>{
    dispatch(fetchData)
  },[dispatch])
  
  useEffect(()=>{
    if(isFirstRender===true){
      setFirstRender(false);
      return;
    }
    dispatch(sendCartData(cart))
  },[cart,dispatch,isFirstRender]);

  

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      { !isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
