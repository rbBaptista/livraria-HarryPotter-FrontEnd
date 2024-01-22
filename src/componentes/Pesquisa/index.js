import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import backgroundImg from '../../imagens/background.png'
import { getLivros } from '../../services/livros'
import { postFavoritos } from '../../services/favoritos'

const PesquisaContainer = styled.section`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: auto;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    border: 1px solid transparent;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function addFavorito(id) {
        await postFavoritos(id)
        alert('Livro adicionado aos favoritos!')
    }


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( (livro, index) => (
                <Resultado key={index} onClick={() => addFavorito(livro.id)}>
                    <img key={index} src={livro.src} alt='imagen livro'/>
                    <p>{livro.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa