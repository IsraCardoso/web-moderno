import React, {Component} from "react";


export default class Saudacao extends Component {
  //states:
  state={
    tipo:this.props.tipo,
    nome:this.props.nome
  }

  //constructors:
  constructor(props){
    super(props)
    this.mudarTipo = this.mudarTipo.bind(this)
    this.mudarNome = this.mudarNome.bind(this)
    }

  //methods:
  mudarTipo(e){
    this.setState({ tipo: e.target.value});
    }
  mudarNome(e){
    this.setState({ nome: e.target.value});
  }
  //componente a renderizar c/ declaração de props(parâmetros):
  render() {
    //desestruturação de props:
    const {tipo, nome} = this.state; 
    //componente a renderizar:
    return(
      <>
        <h1>{tipo}, {nome}!</h1>
        <hr />
        <input type='text' placeholder='Tipo' value={tipo} 
          onChange={(e) => this.mudarTipo(e) } />
        <input type='text' placeholder='Nome' value={nome} 
          onChange={this.mudarNome} />
      </>
    )
  }
}

