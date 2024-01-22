import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png' 
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getLancamentos } from '../../services/lancamentos.js'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`



function UltimosLancamentos() {
    const [livrosLancamentos, setLivrosLancamentos] = useState([])

    async function fetchLivrosLancamentos() {
        const livrosLancamentosDaAPI = await getLancamentos()
        setLivrosLancamentos(livrosLancamentosDaAPI)
    }
    
    useEffect(() => {
        fetchLivrosLancamentos()
    }, [])

    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livrosLancamentos.map( (livro, index) => (
                    <img key={index} style={{ margin: '20px'}} src={livro.src} alt=''/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Harry Potter e a Camara Secreta"
                descricao="Série Harry Potter - Livro 2"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos