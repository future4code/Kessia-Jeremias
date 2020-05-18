import React from 'react';
import './App.css';
import styled from 'styled-components';
import DadosPessoais from './componentes/DadosPessoais.js';
import Escolaridade from './componentes/Escolaridade.js';
import Cursos from './componentes/Cursos.js';
import Final from './componentes/Final.js';

const Botao = styled.button`
background-color:black;
color:white;
padding: 3px;
`
class App extends React.Component {
  state={
    etapa:1,
  };
  renderizaEtapa(){
    switch(this.state.etapa){
      case 1:
        return <DadosPessoais/>;
      case 2:
        return <Escolaridade/>;
      case 3:
        return <Cursos/>;
      case 4:
        return <Final/>;      

    }
  };
    clickChangeState =()=>{
      this.setState({etapa: this.state.etapa + 1});
    };
  
  render(){
  return (
    <div className="App">
      {this.renderizaEtapa()}
      <Botao onClick={this.clickChangeState}>Próxima Etapa</Botao>
    </div>
  );
  };
};

export default App;
