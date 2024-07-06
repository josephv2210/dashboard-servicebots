import { Mail, ExternalLink } from "lucide-react";

function Footer() {
  return (
    <ul className="layout-footer">
      <li>
        <a target="_blank" href="mailto:equipo@soporte.com">
          <Mail color="#999999" size={15} />
          <span>equipo@soporte.com</span>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/josephv2210/dashboard-servicebots">
          <ExternalLink color="#999999" size={15} />
          <span>Repositorio</span>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
