import API_URL from "../apiConfig";

const headers = {
    "Content-Type" : "application/json",
};

const handleResponse = async (response: Response) => {
    if(response.ok){
        if(response.status === 204){
            return null;
        }
        return response.json();
    }
    else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Network response not ok");
    }
};

export const fetchFoods = async () => {
    const response = await fetch(`${API_URL}/api/foodapi/foodlist`);
    return handleResponse(response);
}

export const fetchFoodById = async(foodId: string) => {
    const response = await fetch(`${API_URL}/api/foodapi/${foodId}`);
    return handleResponse(response)
}

export const createFood = async (food: any) => {
    const response = await fetch(`${API_URL}/api/foodapi/create`, {
        method: "POST",
        headers,
        body: JSON.stringify(food),
    });
    return handleResponse(response);
}

export const updateFood = async (foodId: number, food: any) => {
    const response = await fetch(`${API_URL}/api/foodapi/update/${foodId}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(food),
    });
    return handleResponse(response);
}

export const fetchRegistrations = async () => {
    const response = await fetch(`${API_URL}/api/registrationapi/registrationList`);
    return handleResponse(response);
}

export const deleteFood = async (foodId: number) => {
    const response = await fetch(`${API_URL}/api/foodapi/delete/${foodId}`, {
        method: "DELETE",
    });
    return handleResponse(response);
}