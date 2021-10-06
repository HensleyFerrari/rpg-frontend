import React from 'react'
// import { render } from 'react-dom'
import './CharInfo.css'

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

const lifePercentage = {
    width: `${percentage(60, 75)}%`
}

// eslint-disable-next-line
export default props =>{
    return (
        <div>
            <div className="display-4 p-2 d-flex justify-content-center">{props.data.name}</div>
            <hr />
            <div className="build p-2">
                <div className="d-flex flex-column pb-2">
                    <label><b>Nome </b></label>
                    <input type="text" value={props.data.name} />
                    <label><b>Ocupação</b> </label>
                    <input type="text" value={props.data.occupation} />
                    <label><b>Idade</b> </label>
                    <input type="text" value="41" />
                    <label><b>Origem</b> </label>
                    <input type="text" value="Rio de Janeiro" />
                </div>
                Vida:
                <div className="progress">
                    <div className="progress-bar bg-danger" style={lifePercentage} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">10/75</div>
                </div>
            </div>
        </div>
    )
}
