type StatusPokemonCardProps = {
  status: number;
  text: string;
};

const StatusPokemonCard = ({ status, text }: StatusPokemonCardProps) => {
  return (
    <div className="statusPokemonCard">
      <p>{status}</p>
      <span>{text}</span>
    </div>
  );
};

export default StatusPokemonCard;
