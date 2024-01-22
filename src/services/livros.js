import axios from "axios";

const apiLivros = axios.create({
    baseURL: "http://localhost:8000/livros"
});

async function getLivros() {
    const response = await apiLivros.get('/');

    return response.data;
}

export { getLivros };