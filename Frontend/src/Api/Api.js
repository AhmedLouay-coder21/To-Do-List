import { data } from "../data/data";
let isMockData = true;
export async function GenericApiFetch(route = "", method = "GET") {
    if(isMockData)
    {
        return data;
    }
    const response = await fetch(`https://localhost:7163/tasks${route}`, {
        method,
        headers: {
            Accept: "application/json"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
}