import React, {Component} from 'react';
import './estilo.css';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      info: []
    }
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    fetch(url)
    .then((r) => r.json()) //se não der erro na chamada da URL, retorna o json.
    .then((json) => { // se o json não der erro, adiciona informações do json no array 'info'.
      let state = this.state
      state.info = json
      this.setState(state)
    })
  }

  render(){
    return(
      <div className="container">
        {this.state.info.map((item) => {
          return (
          <article className="post">
            <strong className="titulo">{item.titulo}</strong>
            <a>ID: {item.id}</a>
            <img className="img" src={item.capa}/>
            <p className="subtitulo">{item.subtitulo}</p>
            <Link to="/post" className="botao">Leia mais</Link>
          </article>
          );
        })}
      </div>
    )
  }
}


export default Home;
