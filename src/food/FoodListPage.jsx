import React from "react";

const FoodListPage = () => {
    const foods = [{
        FoodId: 1,
        Name: "Chicken",
        FoodGroup: "Meat",
        Calories: 111,
        Protein: 23,
        Carbohydrates: 0,
        Fats: 2.1,
        ImageURL: "images/chicken.jpg"
    },
    {
        FoodId: 2,
        Name: "Salmon Fillet",
        FoodGroup: "Meat",
        Calories: 224,
        Protein: 20,
        Carbohydrates: 0,
        Fats: 16,
        ImageURL: "/images/salmon.jpg"
    }];

    return (
        <div>
            <h1>Foods</h1>
            <table>
            <thead>
                <tr>
                    <th>FoodId</th>
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
                {foods.map(food =>(
                    <tr key={food.FoodId}>
                        <td>{food.FoodId}</td>
                        <td>{food.FoodGroup}</td>
                        <td>{food.Name}</td>
                        <td>{food.Calories}</td>
                        <td>{food.Protein}</td>
                        <td>{food.Carbohydrates}</td>
                        <td>{food.Fats}</td>
                        <td><img src={food.ImageURL} alt={food.Name}/></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default FoodListPage;