import React from 'react'
import "./App.css"
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import MainNavigation from './components/MainNavigation'
import AddFoodRecipe from './Pages/AddFoodRecipe'
import axios from "axios"
import EditRecipe from './Pages/EditRecipe'
import { axiosInstance } from './lib/axios'

const getAllRecipes = async()=>{
  let allRecipes=[]
  await axiosInstance.get('/recipe').then(res=>{
    allRecipes=res.data
  })
  return allRecipes
}

const getMyRecipe = async ()=>{
 let user = JSON.parse(localStorage.getItem("user"))
 let allRecipes = await getAllRecipes()
  return allRecipes.filter(item=>item.createdBy===user._id)
}

const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}



const router=createBrowserRouter([
   {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes},
    {path:"/myRecipe",element:<Home/>,loader:getMyRecipe},
    {path:"/favRecipe",element:<Home/>, loader:getFavRecipes},
     {path:"/addRecipe",element:<AddFoodRecipe/>},
     {path:"/editRecipe/:id",element:<EditRecipe/>}


   ]}
  
])

const App = () => {
  return (
    <div>
   <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App