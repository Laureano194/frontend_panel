import {svg} from '../components/Resources/Icons'
import { Sidenav, SidenavItem } from '../components/KimiaUI/Sidenav';

export const SidenavPage = () => {

  return (
        <Sidenav>
          <SidenavItem href="/invitados/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
              height={22}
              width={22}
            >
              <path d={svg.invitados} />
            </svg>
            <span className="pl-2">Invitados</span>
          </SidenavItem>
          <SidenavItem href="/mensajes/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
            >
              <path d={svg.mensajes} />
            </svg>
            <span className="pl-2">Mensajes</span>
          </SidenavItem>
          <SidenavItem href="/imagenes/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
            >
              <path d={svg.imagenes} />
            </svg>
            <span className="pl-2">Imágenes</span>
          </SidenavItem>
          <SidenavItem href="/configuracion/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
            >
              <path d={svg.configuracion} />
            </svg>
            <span className="pl-2">Configuración General</span>
          </SidenavItem>
        </Sidenav>
    );
  };