import React, { useState, useEffect } from 'react'
import Main from '../../template/Main'
import CharInfo from './info/CharInfo'

const URL = 'http://localhost:3003/api/chars'

//TODO Criar os diversos componentes para os trechos da vida
//TOOD Adicionar mecanica dos dados
//TODO Adicionar funcionalidade na ficha

// eslint-disable-next-line
function Personal({ match }) {
    useEffect(() => {
        fetchChar()
        console.log(match)
    }, [])

    const [char, setChar] = useState({})

    const fetchChar = async () =>{
        const fetchChar = await fetch(URL + `/${match.params.charId}`)
        const char = await fetchChar.json()
        setChar(char)
    }

    return (
        <Main icon="user" title="Pagina Pessoal" subtitle="Aqui contém tudo sobre o seu personagem">
            <CharInfo data={char}/>
        </Main>
    )
}

export default Personal
