import React, { useState, useEffect } from "react";
import RegistrationTable from "./RegistrationTable";
import { Registration } from "../types/registration";
import { fetchRegistrations } from "../food/FoodService";

const RegistrationListPage: React.FC = () => {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //This function fetches the registrations from the API
    const fetchRegistration = async () => {
        setLoading(true);
        setError(null);

        try{
            const data = await fetchRegistrations();
            setRegistrations(data);
        }
        catch(error){
            console.error("Problem with the fetch operation: ", error);
            setError("Failed to fetch registrations");
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRegistration();
    }, []);

    return(
        <div>
            <h1>Registrations</h1>
            {/*Conditional rendering that renders if the registrations are being fetched*/}
            {loading && <p>Loading...</p>}
            {/*Conditional rendering that renders the error message if an error occurs*/}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <RegistrationTable
                registrations={registrations}
            />
        </div>
    );
};

export default RegistrationListPage;