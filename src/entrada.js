import React, { Component } from 'react';

class Entrada extends Component {
    render() {
        return (
            <div className="App-header">
                
                <span>Usuário GitHub: </span>
                <input type="text" value={this.props.valor} onChange={this.props.onInputChange} />
                
                <button className="App-button" onClick={this.props.onButtonClick}>  Procurar</button>
              
            </div>
        )
    }
}

export default Entrada;