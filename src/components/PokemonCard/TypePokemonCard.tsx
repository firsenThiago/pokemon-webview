import React from "react";

type TypePokemonCardProps = {
  type: string;
};

const TypePokemonCard = ({ type }: TypePokemonCardProps) => {
  console.log(type);
  const getBackgroundType = () => {
    switch (type) {
      case "fire":
        return "orange";
      case "water":
        return "blue";
      case "grass":
        return "green";
      case "poison":
        return "purple";
      case "flying":
        return "lightblue";
      case "bug":
        return "red";
      default:
        return "gray";
    }
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: getBackgroundType(),
    fontSize: "36px",
    padding: "4px",
    borderRadius: "8px",
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: "32px",
  };

  return <div style={cardStyle}>{type}</div>;
};

export default TypePokemonCard;
