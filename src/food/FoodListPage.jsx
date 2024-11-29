import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5149"

const FoodListPage = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFoods = async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(`${API_URL}/api/foodapi/foodList`);
            if(!response.ok){
                throw new Error("Network response nok ok");
            }
            const data = await response.json();
            setFoods(data);
            console.log(data);
        }
        catch(error){
            console.error(`Problem with the fetch operation: ${error.message}`);
            setError("Failed to fetch foods")
        }
        finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchFoods();
    }, []);

    return (
        <div>
            <h1>Foods</h1>
            <button onClick={fetchFoods} disabled={loading}>
                {loading ? "Loading..." : "Refresh Foods"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
                    <tr key={food.foodId}>
                        <td>{food.foodId}</td>
                        <td>{food.name}</td>
                        <td>{food.foodGroup}</td>
                        <td>{food.calories} kcal</td>          
                        <td>{food.protein} g</td>
                        <td>{food.carbohydrates} g</td>
                        <td>{food.fats} g</td>
                        <td><img src={`${API_URL}${food.imageURL}`} alt={food.Name}/></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default FoodListPage;