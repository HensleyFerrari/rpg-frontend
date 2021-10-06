import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Card from './Card'
import './Char.css'

const URL = 'http://localhost:3003/api/chars'
//TODO Criar os cards de personagens
//TODO Criar o dados para pagina unica

// eslint-disable-next-line
export default class Char extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get(URL)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
    }

    render() {
        return (
            <Main icon="user" title="Personagens" subtitle="Lista dos Personagens">
                <div className="display-4 p-2 d-flex justify-content-center">Lista dos Personagens</div>
                <hr />
                <div className="p-2 d-flex justify-content-end">
                    <button className="btn btn-light">
                        <i className="fa fa-user-plus"> Novo Personagem</i>
                    </button>
                </div>
                <Card list={this.state.list} />
            </Main>
        )
    }
}
