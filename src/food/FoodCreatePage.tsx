import React from "react";
import { useNavigate } from "react-router-dom";
import FoodForm from "./FoodForm";
import { Food } from "../types/food";
import * as FoodService from "./FoodService";

const FoodCreatePage: React.FC = () => {
    const navigation = useNavigate();

    const foodCreated = async (food: Food) => {
        try{
            const data = await FoodService.createFood(food);
            console.log("Food registered successfully:", data)
            navigation("/foods");
        } 
        catch(error){
            console.error("Error with the fetch operation", error);
        }
    }

    return(
        <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100">
            <div className="tw-bg-white tw-p-20 tw-rounded-lg tw-shadow-xl">
                <h1 className="tw-font-bold tw-text-2xl tw-pb-4">Register New Food</h1>
                <FoodForm onFoodChanged={foodCreated}/>
            </div>
        </div>
    );
};

export default FoodCreatePage;