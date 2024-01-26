import React from "react";

type TypePokemonCardProps = {
  type: string;
};

const TypePokemonCard = ({ type }: TypePokemonCardProps) => {
  const getBackgroundType = () => {
    switch (type) {
      case "fire":
        return "orange";
      case "water":
        return "blue";
      case "grass":
        return "green";
      default:
        return "gray";
    }
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: getBackgroundType(),
    padding: "5px",
    borderRadius: "8px",
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
  };

  return <div style={cardStyle}>{type}</div>;
};

export default TypePokemonCard;
