import React from "react";
import { Registration } from "../types/registration";

interface RegistrationTableProps{
    registrations: Registration[];
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({ registrations}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Registration Id</th>
                    <th>Registration Date</th>
                    <th>User Id</th>
                    <th>Name of User</th>
                </tr>
            </thead>
            <tbody>
                {registrations.map(registration => (
                    <tr key={registration.registrationId}>
                        <td>{registration.registrationId}</td>
                        <td>{registration.registrationDate}</td>
                        <td>{registration.userId}</td>
                        <td>{registration.userName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RegistrationTable;