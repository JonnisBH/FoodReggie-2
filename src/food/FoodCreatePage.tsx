import React from "react";
import { useNavigate } from "react-router-dom";
import FoodForm from "./FoodForm";
import { Food } from "../types/food";
import API_URL from "../apiConfig";

const FoodCreatePage: React.FC = () => {
    const navigation = useNavigate();

    const foodCreated = async (food: Food) => {
        try{
            const response = await fetch(`${API_URL}/api/foodapi/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(food),
            });
            
            if(!response.ok){
                throw new Error("Network response not ok")
            }

            const data = await response.json();
            console.log("Food registered successfully:", data)
            navigation("/foods");
        } 
        catch(error){
            console.error("Error with the fetch operation", error);
        }
    }

    return(
        <div>
            <h2>Register New Food</h2>
            <FoodForm onFoodChanged={foodCreated}/>
        </div>
    );
};

export default FoodCreatePage;