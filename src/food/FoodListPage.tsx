import React, { useState, useEffect } from "react";
import FoodTable from "./FoodTable"
import FoodGrid from "./FoodGrid";
import API_URL from "../apiConfig";
import * as FoodService from "./FoodService";

const FoodListPage: React.FC = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showTable, setShowTable] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    //Toggles between table and grid view
    const tableOrGrid = () => setShowTable(prevShowTable => ! prevShowTable);

    const fetchFoods = async () => {
        setLoading(true);
        setError(null);

        try{
            const data = await FoodService.fetchFoods();
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
        const saveView = localStorage.getItem("itemViewMode");
        console.log("[fetch foods] Saved view mode:", saveView);
        if(saveView){
            if(saveView === "grid")
                setShowTable(false)
        }
        fetchFoods();
    }, []);

    //Saves the current view mode (table or grid) to localStorage whenever it changes
    useEffect(() => {
        console.log("[save view state] Saving view mode:", showTable ? "table" : "grid");
        localStorage.setItem("itemViewMode", showTable ? "table" : "grid");
    }, [showTable]);

    //Search bar
    const searchFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.foodGroup.toLowerCase().includes(searchQuery.toLowerCase())
    );

    //Handling the deletion of a food item
    const foodDelete = async (foodId: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this food?");
        if(confirmDelete){
            try{
                await FoodService.deleteFood(foodId);
                setFoods(prevFood => prevFood.filter(food => food.foodId !== foodId));
                console.log("Food deleted with id:", foodId);
            }
            catch(error){
                console.error("Error when deleting food", error)
                setError("Food was not deleted")
            }
        }
    };

    //The html structure of the code
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
            {showTable ? <FoodTable foods={searchFoods} apiUrl={API_URL} onFoodDeleted={foodDelete}/> : <FoodGrid foods={searchFoods} apiUrl={API_URL} onFoodDeleted={foodDelete}/>}
            <a href="/foodcreate">Register new Food</a>
        </div>
    );
};

export default FoodListPage;