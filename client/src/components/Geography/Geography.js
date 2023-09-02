import React from "react";
import { Map } from "../../elements/map/map";
import { useWidthContext } from "../../ContextProviders/WidthProvider";

const Geography = () => {
  const { width } = useWidthContext();

  return <div style={{ marginBottom: "110px" }}>{width > 440 && <Map />}</div>;
};

export default Geography;
