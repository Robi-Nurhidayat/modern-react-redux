import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const options = [
    { label: "Makanan", listMenu: ["Ayam", "Ikan", "Nasi"] },
    { label: "Minuman", listMenu: ["Okky Jelly", "Teh Kotak", "Air Putih"] },
    { label: "Rebus", listMenu: ["Jagung", "Ubi", "Singkong"] },
  ];
  return (
    <>
      <Accordion options={options} />
    </>
  );
};

export default AccordionPage;
