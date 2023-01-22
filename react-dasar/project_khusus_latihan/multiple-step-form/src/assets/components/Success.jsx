import React, { useState } from "react";

const Success = () => {
  const [showModal, setShowModal] = useState(true);
  return <div>{alert("Thankyou for submitted")}</div>;
};

export default Success;
