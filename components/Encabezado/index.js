import React from 'react'
import PropTypes from 'prop-types'

const Encabezado = ({ titulo }) => (
  <h1 style={{ color: 'Green', fontSize: '40px' }}>{titulo}</h1>
)

Encabezado.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Encabezado
