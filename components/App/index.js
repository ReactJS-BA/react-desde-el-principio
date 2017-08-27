import React from 'react'
import Encabezado from '../Encabezado'
import Contador from '../Contador'

const App = () => (

	<div className="container">

      <section>
        <Encabezado titulo="React desde el principio" />
        <p className="lead">Meetup #<Contador numeroInicial={2} /></p>
      </section>

    </div>
)

export default App
