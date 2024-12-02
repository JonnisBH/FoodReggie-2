import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FoodForm from "./FoodForm";
import { Food } from "../types/food";
import * as FoodService from "./FoodService";

const FoodUpdatePage: React.FC = () => {
    const { foodId } = useParams<{ foodId: string }>();
    const navigation = useNavigate();
    const [food, setFood] = useState<Food | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFood = async () => {
            try{
                const data = await FoodService.fetchFoodById(foodId);
                setFood(data);
            }
            catch(error){
                setError("Failed to fetch food")
                console.error("There was a problem with the fetch operation:", error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchFood();
    }, [foodId]);

    const foodupdate = async (food: Food) => {
        try{
            const data = await FoodService.updateFood(food.foodId, food);
            console.log("Food updated successfully:", data);
            navigation("/foods");
        }
        catch(error){
            console.error("There was a problem with the fetch operation:", error);
        }
    }

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    if(!food){
        return <p>No food found</p>
    }

    return(
        <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100">
            <div className="tw-bg-white tw-p-20 tw-rounded-lg tw-shadow-xl">
            <h1 className="tw-font-bold tw-text-2xl tw-pb-4">Register New Food</h1>
                <FoodForm onFoodChanged={foodupdate} foodId={food.foodId} isUpdate={true} initialData={food}/>
            </div>
        </div>
        
    )
}

export default FoodUpdatePage;