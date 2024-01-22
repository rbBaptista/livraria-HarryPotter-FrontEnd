import styled from 'styled-components'
import { getFavoritos, deleteFavoritos } from '../services/favoritos'
import { useEffect, useState } from 'react'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


function Favoritos() {
  const [livrosFavoritos, setLivrosFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setLivrosFavoritos(favoritosDaAPI)
  }

  async function deletarFavoritos(id) {
    await deleteFavoritos(id)
    alert('Livro deletado dos favoritos!')
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <div>
        <Titulo>Favoritos</Titulo>
        <ResultadoContainer>
          {livrosFavoritos.map((favorito, index) => (
            <Resultado onClick={deletarFavoritos}>
              <p>{favorito.nome}</p>
              <img key={index} src={favorito.src} alt='' />
            </Resultado>
          ))}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
