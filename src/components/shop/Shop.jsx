import React from 'react'
import Main from '../template/Main'

// eslint-disable-next-line
export default function Shop(props) {
    //Criar componente para cada tipo de arma
    const pistol = [
        {
            id: 1,
            name: "Beretta 92F",
            damage: "2d6",
            damageType: "Balístico",
            capacity: "15 Pente",
            ammoType: "9mm",
            price: "R$ 600,00"
        },
        {
            id: 2,
            name: "Colt M1911",
            damage: "2d6",
            damageType: "Balístico",
            capacity: "7 Pente",
            ammoType: ".45",
            price: "R$ 580,00"
        }
    ]
    const pistolList = pistol.map(pistol => {
       return <tr>
            <th scope="row" key={pistol.id}>{pistol.name}</th>
            <td>{pistol.damage}</td>
            <td>{pistol.damageType}</td>
            <td>{pistol.capacity}</td>
            <td>{pistol.ammoType}</td>
            <td>{pistol.price}</td>
        </tr>
    })

    return (
        <Main icon="shopping-bag" title="Loja do Jogo" subtitle="Good things on sale stranger!">
            <div className="display-4 p-2 d-flex justify-content-center">Loja</div>
            <hr />
            <div className="p-2">
                <h3 className="p-1">Pistolas</h3>
                <table className="table">
                    <thead>
                        <th scope="col">Nome</th>
                        <th scope="col">Dano</th>
                        <th scope="col">Tipo de Dano</th>
                        <th scope="col">Capacidade</th>
                        <th scope="col">Munição</th>
                        <th scope="col">Preço</th>
                    </thead>
                    {pistolList}
                </table>
            </div>
        </Main>
    )
}