import React, {Component} from 'react';

class Usuario extends Component {
    render() {
        const {
            avatar_url,
            login,
            name,
            blog
        } = this.props.info
        return ( 
        <div className="Perfil">
          <div className="App-list">
            <img src={avatar_url} alt="avatar" id="foto-avatar"/>
            <ul>
                <li>Usuário: {login}</li>
                <li>Nome: {name}</li>
                <li>Blog: {blog}</li>
            </ul>
          </div>

        </div>
        )
    }
}

export default Usuario;