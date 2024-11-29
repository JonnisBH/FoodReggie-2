import React, { useState, useEffect } from "react";
import FoodTable from "./FoodTable"
import FoodGrid from "./FoodGrid";
import { Food } from "../types/food";
import API_URL from "../apiConfig";

const FoodListPage: React.FC = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showTable, setShowTable] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const tableOrGrid = () => setShowTable(prevShowTable => ! prevShowTable);

    const fetchFoods = async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(`${API_URL}/api/foodapi/foodList`);
            if(!response.ok){
                throw new Error("Network response nok ok");
            }
            const data: Food[] = await response.json();
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

    const searchFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.foodGroup.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Foods</h1>
            <button onClick={fetchFoods} disabled={loading}>
                {loading ? "Loading... " : "Refresh Items"}
            </button>
            <button onClick={tableOrGrid}>
                {showTable ? "Grid View" : "Table View"}
            </button>
            <input
                type="text"
                placeholder="Search by name or Food Group"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {showTable ? <FoodTable foods={searchFoods} apiUrl={API_URL}/> : <FoodGrid foods={searchFoods} apiUrl={API_URL}/>}
            <a href="/foodcreate">Register new Food</a>
        </div>
    );
};

export default FoodListPage;