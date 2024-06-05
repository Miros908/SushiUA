import React, { memo } from "react";

function Svg(props) {
  const { name, ...propsSvg } = props;

  return (
    <svg {...propsSvg}>
      <use xlinkHref={"#" + name} />
    </svg>
  );
}

export default memo(Svg); //отслеживает изменения /проверяет изменились ли пропсы
