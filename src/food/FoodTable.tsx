import React from "react";
import { Food } from "../types/food";
import { Link } from "react-router-dom";

interface FoodTableProps{
    foods: Food[];
    apiUrl: string;
    onFoodDeleted: (foodId: number) => void;
}

const FoodTable: React.FC<FoodTableProps> = ({ foods, apiUrl, onFoodDeleted }) => {
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
                    <th>Edit</th>
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
                        <td><Link to={`/foodupdate/${food.foodId}`}>Update</Link></td>
                        <td><Link to="#" onClick={(event) => onFoodDeleted(food.foodId)}>Delete</Link></td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FoodTable;