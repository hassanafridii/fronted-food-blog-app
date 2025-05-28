import React from "react";
import foodRecipe from "../assets/foodRecipe.png";
import RecipeItems from "../components/RecipeItems";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";




const Home = () => {


 const navigate =useNavigate()
 const [isOpen , setIsOpen] = useState(false)

 const addRecipe=()=>{
  let token = localStorage.getItem("token")
  if (token) {
    navigate('/addRecipe')
  }
  else{
   setIsOpen(true)
  }
 }


  return (
    <>
    
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </h5>
          <button onClick={addRecipe}>Share Your Recipe</button>
        </div>
        <div className="right">
          <img src={foodRecipe} alt="" width="320px" height="300px" />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7bf0bf"
            fillOpacity="1"
            d="M0,0L40,32C80,64,160,128,240,176C320,224,400,256,480,234.7C560,213,640,139,720,122.7C800,107,880,149,960,176C1040,203,1120,213,1200,218.7C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
              {(isOpen) &&< Modal onClose={()=> setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)} /></Modal>}

      <div className="recipe">
          <RecipeItems/>
      </div>
      
    </>
  );
};

export default Home;
