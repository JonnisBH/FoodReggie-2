import React, { useState, useEffect } from "react";
import RegistrationTable from "./RegistrationTable";
import { Registration } from "../types/registration";
import { fetchRegistrations } from "../food/FoodService";

const RegistrationListPage: React.FC = () => {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
            <h1 className="tw-font-bold tw-text-2xl">Registrations</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <RegistrationTable
                registrations={registrations}
            />
        </div>
    );
};

export default RegistrationListPage;