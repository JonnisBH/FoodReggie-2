import React from "react";

const FoodGrid = ({ foods, apiUrl }) => {
    return (
        <div>
            <div>
                {foods.map(food => (
                    <div key={food.foodId}>
                        <div>
                        <img src={`${apiUrl}${food.imageURL}`} alt={food.name}/>
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