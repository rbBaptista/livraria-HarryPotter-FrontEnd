import axios from "axios";

const apiFavoritos = axios.create({
    baseURL: "http://localhost:8000/favoritos"
});

async function getFavoritos() {

    const response = await apiFavoritos.get('/');

    return response.data;
}

async function postFavoritos(id) {
    const response = await apiFavoritos.post('/', { id });

    return response.data;
}

async function deleteFavoritos(id) {
    const response = await apiFavoritos.delete(`/${id}`);

    return response.data;
}

export { getFavoritos, postFavoritos, deleteFavoritos };