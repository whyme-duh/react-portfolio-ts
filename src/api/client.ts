
let BASE_URL ="";
const debug= false;
if (debug){
    BASE_URL = "http://127.0.0.1:8000/api";
}
else{
    BASE_URL = "https://shrestharitikapi.pythonanywhere.com/api";

}

export const apiClient = {
    get: async <T>(endpoint: string): Promise<T> => {
        const response = await fetch(`${BASE_URL}${endpoint}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}

