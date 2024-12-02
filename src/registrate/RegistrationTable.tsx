import React from "react";
import { Registration } from "../types/registration";

interface RegistrationTableProps{
    registrations: Registration[];
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({ registrations}) => {
    return(
        <table className="tw-table-auto tw-border-collapse tw-w-full">
            <thead>
                <tr>
                    <th className="tw-p-4 tw-bg-black tw-text-white tw-rounded-tl-lg">Registration Id</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white">Registration Date</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white">User Id</th>
                    <th className="tw-p-4 tw-bg-black tw-text-white tw-rounded-tr-lg">Name of User</th>
                </tr>
            </thead>
            <tbody>
                {registrations.map(registration => (
                    <tr key={registration.registrationId} className="tw-border-b tw-border-gray-300">
                        <td className="tw-p-4">{registration.registrationId}</td>
                        <td className="tw-p-4">{registration.registrationDate}</td>
                        <td className="tw-p-4">{registration.userId}</td>
                        <td className="tw-p-4">{registration.userName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RegistrationTable;