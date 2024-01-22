import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    width: auto;
    height: 100px;
    margin-right: 100px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>HarryPotter</strong> Books</p>
       </LogoContainer>
    )
}

export default Logo