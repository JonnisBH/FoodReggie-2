import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Food } from "../types/food";

interface FoodFormProps{
    onFoodChanged : (newFood: Food) => void;
    foodId?: number;
}

const FoodForm: React.FC<FoodFormProps> = ({onFoodChanged, foodId}) => {
    const [name, setName] = useState<string>("");
    const [foodGroup, setFoodGroup] = useState<string>("");
    const [calories, setCalories] = useState<number>(0);
    const [protein, setProtein] = useState<number>(0);
    const [carbohydrates, setCarbohydrates] = useState<number>(0);
    const [fats, setFats] = useState<number>(0);
    const [imageURL, setImageURL] = useState<string>("");
    const [error] = useState<string | null>(null);
    const navigation = useNavigate();

    const onCancel = () => {
        navigation(-1);
    };

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        const food: Food = {
            foodId, name, foodGroup, calories, protein, carbohydrates, fats, imageURL
        };
        onFoodChanged(food);
    }

    return(
        <form onSubmit={submit}>
            <div>
                <h1>Name</h1>
                <input 
                    type="text"
                    placeholder="Enter food name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    pattern="[a-zA-zæøåÆØÅ. \-]{2,20}"
                    title="The Name must be only letters and between 2 to 20 characters."
                />
            </div>
            <div>
                <h1>Food Group</h1>
                <input
                    type="text"
                    placeholder="Enter food group"
                    value={foodGroup}
                    onChange={(e) => setFoodGroup(e.target.value)}
                    required
                    pattern="[a-zA-zæøåÆØÅ. \-]{2,20}"
                    title="The Food group must be only letters and between 2 to 20 characters."
                />
            </div>
            <div>
                <h1>Calories</h1>
                <input
                    type="number"
                    placeholder="Enter calories"
                    value={calories}
                    onChange={(e) => setCalories(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div>
                <h1>Protein</h1>
                <input
                    type="number"
                    placeholder="Enter protein"
                    value={protein}
                    onChange={(e) => setProtein(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div>
                <h1>Carbohydrates</h1>
                <input
                    type="number"
                    placeholder="Enter carbohydrates"
                    value={carbohydrates}
                    onChange={(e) => setCarbohydrates(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div>
                <h1>Fats</h1>
                <input
                    type="number"
                    placeholder="Enter fats"
                    value={fats}
                    onChange={(e) => setFats(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div>
                <h1>Image Url</h1>
                <input
                    type="text"
                    placeholder="Enter Image Url"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                />
            </div>

            {error && <p style={{ color: "red"}}>{error}</p>}

            <button type="submit">Register food</button>
            <button type="submit" onClick={onCancel}>Cancel</button>
        </form>
    )
}

export default FoodForm;