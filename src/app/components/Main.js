import React from "react";
import { data } from "./data";
import AccordionNextJs from "./Accordion";


const AccordianMain = () => {
  return (
    <div>
    <div>
    <div>
      <h3 className="main-title">Most asked questions</h3>
      <div className="main-title-underline"></div>
      {data.map((section, index) => (
        <AccordionNextJs key={index} section={section} />
      ))}
    </div>
  </div>
  </div>
  )
}

export default AccordianMain

