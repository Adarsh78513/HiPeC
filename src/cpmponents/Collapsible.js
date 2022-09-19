import React, {useState} from "react";
import parse from "html-react-parser";

function Collapsible({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{parse(title)}</button>
        {isOpen && <div className="content">{parse(children)}</div>}
    </div>
  );
}

export default Collapsible;
