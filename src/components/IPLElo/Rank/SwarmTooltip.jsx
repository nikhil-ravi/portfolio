const Tooltip = (props) => {
  const {
    id,
    color,
    data: { eloRank, tableRank, elo, year },
  } = props;
  return (
    <div className="bg-white p-2 text-black">
      <div className="flex items-center">
        <div className="w-3 h-3 mr-2" style={{ backgroundColor: color }}></div>
        <div className="">
          {id.split(".")[0]} ({year})
        </div>
      </div>
      <p>ELO: {(Math.round(elo * 100) / 100).toFixed(2)}</p>
      <p>ELO Rank: {eloRank}</p>
      <p>League Rank: {tableRank}</p>
    </div>
  );
};

export default Tooltip;
