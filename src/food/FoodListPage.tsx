import React, { useState, useEffect } from "react";
import FoodTable from "./FoodTable"
import FoodGrid from "./FoodGrid";
import API_URL from "../apiConfig";
import * as FoodService from "./FoodService";
import Button from 'react-bootstrap/Button';

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

    useEffect(() => {
        console.log("[save view state] Saving view mode:", showTable ? "table" : "grid");
        localStorage.setItem("itemViewMode", showTable ? "table" : "grid");
    }, [showTable]);

    const searchFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.foodGroup.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

    return (
        <div className="overflow-x-auto">
            <h1 className="tw-font-bold tw-text-2xl">Your List</h1>
            <div className="tw-flex tw-flex-row tw-gap-3 tw-pb-4">
                <Button variant="primary" size="sm" onClick={fetchFoods} disabled={loading}>
                    {loading ? "Loading... " : "Refresh Items"}
                </Button>
                <input className="tw-border tw-rounded-lg tw-px-2 tw-py-1"
                    type="text"
                    placeholder="Search by name or Food Group"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {showTable ? <FoodTable foods={searchFoods} apiUrl={API_URL} onFoodDeleted={foodDelete}/> : <FoodGrid foods={searchFoods} apiUrl={API_URL} onFoodDeleted={foodDelete}/>}
            <div className="tw-flex tw-gap-3 tw-pt-6">
                <Button variant="success" href="/foodcreate">Create a new food item</Button>
                <Button variant="outline-primary" onClick={tableOrGrid}>
                    {showTable ? "Grid View" : "Table View"}
                </Button>
            </div>
        </div>
    );
};

export default FoodListPage;