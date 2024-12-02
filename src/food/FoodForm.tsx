import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Food } from "../types/food";
import { Button } from "react-bootstrap";

interface FoodFormProps{
    onFoodChanged : (newFood: Food) => void;
    foodId?: number;
    isUpdate?: boolean;
    initialData?: Food;
}

const FoodForm: React.FC<FoodFormProps> = ({
    onFoodChanged,
    foodId,
    isUpdate = false,
    initialData}) => {
    const [name, setName] = useState<string>(initialData?.name || "");
    const [foodGroup, setFoodGroup] = useState<string>(initialData?.foodGroup || "");
    const [calories, setCalories] = useState<number>(initialData?.calories || 0);
    const [protein, setProtein] = useState<number>(initialData?.protein || 0);
    const [carbohydrates, setCarbohydrates] = useState<number>(initialData?.carbohydrates || 0);
    const [fats, setFats] = useState<number>(initialData?.fats || 0);
    const [imageURL, setImageURL] = useState<string>(initialData?.imageURL || "");
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
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Name</p>
                <input
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="text"
                    placeholder="Enter food name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    pattern="[a-zA-zæøåÆØÅ. \-]{2,20}"
                    title="The Name must be only letters and between 2 to 20 characters."
                />
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Food Group</p>
                <input
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="text"
                    placeholder="Enter food group"
                    value={foodGroup}
                    onChange={(e) => setFoodGroup(e.target.value)}
                    required
                    pattern="[a-zA-zæøåÆØÅ. \-]{2,20}"
                    title="The Food group must be only letters and between 2 to 20 characters."
                />
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Calories</p>
                <input
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="number"
                    placeholder="Enter calories"
                    value={calories}
                    onChange={(e) => setCalories(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Protein</p>
                <input
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="number"
                    placeholder="Enter protein"
                    value={protein}
                    onChange={(e) => setProtein(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Carbohydrates</p>
                <input
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="number"
                    placeholder="Enter carbohydrates"
                    value={carbohydrates}
                    onChange={(e) => setCarbohydrates(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Fats</p>
                <input
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="number"
                    placeholder="Enter fats"
                    value={fats}
                    onChange={(e) => setFats(Number(e.target.value))}
                    required
                    min="0"
                    step="0.1"
                />
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2">
                <p>Image Url</p>
                <input 
                    className="tw-border tw-rounded-lg tw-px-2 tw-py-1 tw-mb-2"
                    type="text"
                    placeholder="Enter Image Url"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                />
            </div>

            {error && <p style={{ color: "red"}}>{error}</p>}

            <Button type="submit" variant="primary">{isUpdate ? "Update food" : "Register food"}</Button>
            <Button type="submit" variant="link" onClick={onCancel}>Cancel</Button>
        </form>
    )
}

export default FoodForm;