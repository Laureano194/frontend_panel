import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavbarPage } from './components/KimiaUI/NavBar'
import { SidenavPage } from './Pages/SidenavPage'
import InvitadosPage from './Pages/InvitadosPage'
import MensajesPage from './Pages/MensajesPage'
import ImagenesPage from './Pages/ImagenesPage'
import ConfiguracionPage from './Pages/ConfiguracionPage'
import Error404 from './Pages/Error404'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

const App = () => {
  return (
    <>
    <NavbarPage />
    <div className="flex">
      <Router>
        <SidenavPage />
          <div className="w-full">
          <Switch>
            <Route path="/invitados" component={InvitadosPage} />
            <Route path="/mensajes" component={MensajesPage} />
            <Route path="/imagenes" component={ImagenesPage} />
            <Route path="/configuracion" component={ConfiguracionPage} />
            <Route path="*" component={Error404} />
          </Switch>
          </div>
      </Router>
    </div>
    </>
  )
}

export default App