import React from "react";
import { Food } from "../types/food";

interface FoodGridProps{
    foods: Food[];
    apiUrl: string;
}

const FoodGrid: React.FC<FoodGridProps> = ({ foods, apiUrl }) => {
    return (
        <div>
            <div>
                {foods.map(food => (
                    <div key={food.foodId}>
                        <div>
                        <img src={`${apiUrl}${food.imageURL}`} alt={food.name} width={123}/>
                            <div>
                                <h1>{food.name}</h1>
                                <div>Food Group: {food.foodGroup}</div>
                                <div>Calories: {food.calories}kcal</div>
                                <div>Protein: {food.protein}g</div>
                                <div>Carbohydrates: {food.carbohydrates}g</div>
                                <div>Fats: {food.fats}g</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodGrid;