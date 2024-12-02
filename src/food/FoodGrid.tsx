import React from "react";
import { Food } from "../types/food";
import { Button } from "react-bootstrap";

interface FoodGridProps{
    foods: Food[];
    apiUrl: string;
    onFoodDeleted: (foodId: number) => void;
}

const FoodGrid: React.FC<FoodGridProps> = ({ foods, apiUrl, onFoodDeleted }) => {
    return (
        <div>
            <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-6">
                {foods.map(food => (
                    <div key={food.foodId}>
                        <div className="tw-shadow-md">
                        <img src={`${apiUrl}${food.imageURL}`} className="tw-w-60 tw-h-auto tw-rounded-t-lg" alt={food.name} width={123}/>
                            <div className="tw-rounded-b-lg tw-bg-white tw-p-4">
                                <h1 className="tw-font-bold">{food.name}</h1>
                                <div>Food Group: {food.foodGroup}</div>
                                <div>Calories: {food.calories}kcal</div>
                                <div>Protein: {food.protein}g</div>
                                <div>Carbohydrates: {food.carbohydrates}g</div>
                                <div>Fats: {food.fats}g</div>
                                <div className="tw-flex tw-flex-row tw-gap-2 tw-justify-center tw-pt-4">
                                    <Button variant="primary" href={`/foodupdate/${food.foodId}`}>Update</Button>
                                    <Button variant="danger" href="#" onClick={(event) => onFoodDeleted(food.foodId)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodGrid;