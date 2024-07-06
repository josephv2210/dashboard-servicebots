import Icon from "./../assets/png/Icon.png";
import { useWebContext } from '../hooks/useWebContext'
import { useNavigate } from "react-router-dom";


function Page404() {
  const navigate = useNavigate();

  const { isMobile } = useWebContext();
  return (
    <div className={`errorPage-container ${isMobile && 'movil'}`}>
      <img src={Icon} />
      <aside>
        <span className="errorPage-title">
          404
        </span>
        <span className="errorPage-text">La pagina buscada no se encuentra
        vuelve al </span>

        <button onClick={() => navigate('/dashboard')}>Inicio</button>

      </aside>
    </div>
  )
}

export default Page404