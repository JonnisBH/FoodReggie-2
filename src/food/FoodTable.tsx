import React from "react";
import { Food } from "../types/food";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

interface FoodTableProps{
    foods: Food[];
    apiUrl: string;
    onFoodDeleted: (foodId: number) => void;
}

const FoodTable: React.FC<FoodTableProps> = ({ foods, apiUrl, onFoodDeleted }) => {
    return (
        <table className="tw-table-auto tw-border-collapse tw-w-full">
            <thead>
                <tr>
                    <th className="tw-p-4 tw-bg-black tw-text-white tw-rounded-tl-lg">Food ID</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white">Food Group</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white">Name</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white">Nutrition values per 100 gram</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white">Image</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white tw-rounded-tr-lg">Edit</th>
                </tr>
            </thead>
            <tbody>
                {foods.map(food => (
                    <tr key={food.foodId} className="tw-border-b tw-border-gray-300">
                        <td className="tw-p-4">{food.foodId}</td>
                        <td className="tw-p-4">{food.name}</td>
                        <td className="tw-p-4">{food.foodGroup}</td>
                        <td className="tw-p-4">{food.calories} kcal, {food.protein} g protein, {food.carbohydrates} g carbohydrates, {food.fats} g fat</td>          
                        <td className="tw-p-4"><img src={`${apiUrl}${food.imageURL}`} alt={food.name} width={123}/></td>
                        <td className="tw-flex tw-gap-3 tw-p-4">
                            <Button variant="primary" href={`/foodupdate/${food.foodId}`}>Update</Button>
                            <Button variant="danger" href="#" onClick={(event) => onFoodDeleted(food.foodId)}>Delete</Button>
                        </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FoodTable;