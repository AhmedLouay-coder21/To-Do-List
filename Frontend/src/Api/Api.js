export async function GenericApiFetch(route = "", method = "GET") {
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