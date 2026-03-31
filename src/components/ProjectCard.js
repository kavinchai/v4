import { useRef, useEffect } from "react";
import "../css/ProjectCard.css";

const ProjectCard = ({ proj: { title, desc, link, tech } }) => {
  const cardRef = useRef(null);
  const descRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const fitDesc = () => {
      const el = descRef.current;
      if (!el) return;
      el.style.fontSize = "";
      while (el.scrollHeight > el.offsetHeight && parseFloat(getComputedStyle(el).fontSize) > 8)
        el.style.fontSize = (parseFloat(getComputedStyle(el).fontSize) - 0.5) + "px";
    };

    const fitTech = () => {
      const el = techRef.current;
      if (!el) return;
      el.style.fontSize = "";
      el.style.gap = "";
      while (el.scrollWidth > el.offsetWidth && parseFloat(getComputedStyle(el).fontSize) > 8) {
        const size = parseFloat(getComputedStyle(el).fontSize) - 0.5;
        el.style.fontSize = size + "px";
        el.style.gap = (size * 0.8) + "px";
      }
    };

    fitDesc();
    fitTech();

    const ro = new ResizeObserver(() => { fitDesc(); fitTech(); });
    if (cardRef.current) ro.observe(cardRef.current);
    return () => ro.disconnect();
  }, [desc, tech]);

  return (
    <a className="project-card-component" ref={cardRef} href={link} target="_blank" rel="noreferrer">
      <div className="project-card-header">
        <div className="project-card-title">{title}</div>
      </div>
      <div className="project-card-body">
        <div className="project-card-desc" ref={descRef}>{desc}</div>
      </div>
      <div className="project-card-footer">
        <div className="project-card-tech" ref={techRef}>
          {tech.map((key, index) => (
            <span key={index} className="tech-used">{key}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
