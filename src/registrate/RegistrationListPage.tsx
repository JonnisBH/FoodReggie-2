import React, { useState, useEffect } from "react";
import RegistrationTable from "./RegistrationTable";
import API_URL from "../apiConfig";
import { Registration } from "../types/registration";

const RegistrationListPage: React.FC = () => {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRegistrations = async () => {
        setLoading(true);
        setError(null);

        try{
            const response1 = await fetch(`${API_URL}/api/registrationapi/registrationList`);
            const data1 = await response1.json();
            setRegistrations(data1);
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
        fetchRegistrations();
    }, []);

    return(
        <div>
            <h1>Registrations</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <RegistrationTable
                registrations={registrations}
            />
        </div>
    );
};

export default RegistrationListPage;