const Tooltip = ({ serie }) => {
  return (
    <div>
      <div className="flex items-center">
        <div
          className="w-3 h-3 mr-2"
          style={{ backgroundColor: serie.color }}
        ></div>
        <div>{serie.data.name}</div>
      </div>
    </div>
  );
};

export default Tooltip;
