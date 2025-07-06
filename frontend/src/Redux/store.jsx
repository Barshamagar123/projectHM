import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice.jsx"
import storage from "redux-persist/lib/storage";
import  {persistStore,persistReducer} from "redux-persist";


                    const  persistConfig={
    //key:localStorage
    key:"root",
    storage
   
};



         const persisitedReducer=persistReducer(persistConfig,AuthSlice);
              export const store= configureStore({
                reducer:{
                    Auth:persisitedReducer
                }
              })



              export const persistor= persistStore(store);