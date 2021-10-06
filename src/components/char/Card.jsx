import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

// eslint-disable-next-line
export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(char => (
            <div className="card border-light mb-3" key={char.id}>
                <Link to={`/char/${char._id}`} className="char-link">
                    <div className="card-header d-flex justify-content-center">{char.name}</div>
                </Link>
                <div className="card-body">
                    <p className="card-text">Ocupação: {char.occupation}<br />Vida: 4/75 <br />Munição: 1/7</p>
                </div>
            </div>
        ))
    }

    return (
        <div className="card-group">
            {renderRows()}
        </div>
    )
}

