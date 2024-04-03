import React from "react";
import Atropos from "atropos/react";
import "./styles/Card.css";
import "atropos/css";
export default function CardAnimation() {
  return (
    <>
     <Atropos className="animation">
 <h2
 
 data-atropos-offset="15"
 >The Fox Tales</h2>
  <img
    src="/fondo1.png"
    data-atropos-offset="10"
    className="img-animation foreground-image imagen1"
  />
  <img
    src="/fondo2.png"
    data-atropos-offset="15"
    className="img-animation foreground-image imagen2"
  />
  <img
    src="/fondo3.png"
    data-atropos-offset="5"
    className="img-animation foreground-image imagen3"
  />
  <img
    src="/fondo4.png"
    data-atropos-offset="0"
    className="img-animation foreground-image imagen4"
  />
  <img
    src="/fondo5.png"
    className="img-animation background-image imagen5"
    data-atropos-offset="-5"
  />

  
</Atropos>
    </>
  );
}
