import React from 'react'
import PropTypes from 'prop-types'

class Contador extends React.Component {

    // Valores por default en caso de que no se pasen via props
    static defaultProps = {
        numeroInicial: 0
    }

    constructor(props){
        super(props) 

        // Inicialización del estado
        this.state = { numero: props.numeroInicial }

        // Este bindeo es necesario para hacer que `this` apunte al objecto correcto
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {

      // Incrementa el contador en el estado. Para que el estado sea autoreferencial se lo envuelve en una funcion
      this.setState((prevState,props) => {
        return {numero: prevState.numero + 1}
      })
    }

    render() {

        // Renderea un boton que muestra el estado del contador
        return <button onClick={this.clickHandler}>{this.state.numero}</button>
    }
}

Contador.propTypes = {
  numeroInicial: PropTypes.number
}

export default Contador