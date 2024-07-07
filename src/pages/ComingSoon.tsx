import ComingSoonImage from "./../assets/svg/coming-soon-image.svg";
import { useWebContext } from '../hooks/useWebContext'

function ComingSoon() {
  const { isMobile } = useWebContext();

  return (
    <div className={`coming-soon-container ${isMobile && 'movil'}`}>
      <img src={ComingSoonImage} />
      <span>Esta pagina estará disponible próximamente</span>
    </div>
  );
}

export default ComingSoon;
