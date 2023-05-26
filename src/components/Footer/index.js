import React, { useState } from "react";
import * as C from "./style";
import { BiShuffle, BiSkipPrevious, BiPlay, BiPause, BiSkipNext, BiSync } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";

const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(true);

  const handleButtonClick = () => {
    setFooterVisible(!footerVisible);
  };

  return (
    <>
      <C.Container>

      </C.Container>
    </>
  );
};

export default Footer;
