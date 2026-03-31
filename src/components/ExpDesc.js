import { useRef, useEffect } from "react";
import "../css/ExpDesc.css";

const ExpDesc = ({
  data: { title, company, location, duration, url, text }
}) => {
  const compRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const fit = () => {
      const comp = compRef.current;
      const body = bodyRef.current;
      if (!comp || !body) return;
      body.style.fontSize = "";
      while (comp.scrollHeight > comp.offsetHeight && parseFloat(getComputedStyle(body).fontSize) > 8)
        body.style.fontSize = (parseFloat(getComputedStyle(body).fontSize) - 0.5) + "px";
    };

    fit();
    const ro = new ResizeObserver(fit);
    if (compRef.current) ro.observe(compRef.current);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div className="exp-desc-component" ref={compRef}>
      <div className="exp-desc-header">
        <div className="exp-desc-headerSec1">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="expDescCompany"
          >{`${company}`}</a>
          <div className="exp-desc-title">{title}</div>
        </div>
        <div className="exp-desc-headerSec2">
          <div className="exp-desc-duration">{duration}</div>
          <div className="exp-desc-location">{location}</div>
        </div>
      </div>
      <div className="exp-desc-body" ref={bodyRef}>
      <ul className="exp-desc-unordered-list">
          {text?.map((key) => (
            <li key={key} className="exp-desc-list">
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpDesc;
