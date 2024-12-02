import React from "react";
import { useNavigate } from "react-router-dom";
import FoodForm from "./FoodForm";
import { Food } from "../types/food";
import * as FoodService from "./FoodService";

const FoodCreatePage: React.FC = () => {
    const navigation = useNavigate(); //Navigate between pages

    //Function to handle food creation after form submission
    const foodCreated = async (food: Food) => {
        try{
            //Calls the craeteFood function from FoodService to send the data to the API
            const data = await FoodService.createFood(food);
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