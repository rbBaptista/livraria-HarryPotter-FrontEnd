import axios from "axios";

const apiLancamentos = axios.create({
    baseURL: "http://localhost:8000/lancamentos"
});

async function getLancamentos() {
    const response = await apiLancamentos.get('/');

    return response.data;
}

export { getLancamentos };