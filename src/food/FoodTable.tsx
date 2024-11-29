import React from "react";
import { Food } from "../types/food";

interface FoodTableProps{
    foods: Food[];
    apiUrl: string;
}

const FoodTable: React.FC<FoodTableProps> = ({ foods, apiUrl }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Food ID</th>
                    <th>Food Group</th>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbohydrates</th>
                    <th>Fats</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {foods.map(food => (
                    <tr key={food.foodId}>
                        <td>{food.foodId}</td>
                        <td>{food.name}</td>
                        <td>{food.foodGroup}</td>
                        <td>{food.calories} kcal</td>          
                        <td>{food.protein} g</td>
                        <td>{food.carbohydrates} g</td>
                        <td>{food.fats} g</td>
                        <td><img src={`${apiUrl}${food.imageURL}`} alt={food.name} width={123}/></td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FoodTable;