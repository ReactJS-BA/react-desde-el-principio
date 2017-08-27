import React from 'react'
import Encabezado from '../Encabezado'
import Contador from '../Contador'

const App = () => (
  <section>
    <Encabezado titulo="React desde el principio" />
    Meetup #<Contador numeroInicial={2} />
  </section>
)

export default App
