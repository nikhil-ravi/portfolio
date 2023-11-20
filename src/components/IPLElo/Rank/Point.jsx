import { FaCrown } from "react-icons/fa";

const Point = ({ point }) => {
  return (
    <g
      transform={`translate(${point.x}, ${point.y})`}
      style={{ pointerEvents: "none" }}
    >
      {point.data.won ? (
        <FaCrown
          color={point.borderColor}
          size={point.size * 3}
          transform={
            point.isActive
              ? "translate(-24, -25)"
              : point.isInactive
              ? "translate(-9, -10)"
              : "translate(-12, -13)"
          }
        />
      ) : (
        <>
          <rect
            x={point.size * -0.5 - 4}
            y={point.size * -0.5 + 4}
            width={point.size + point.borderWidth}
            height={point.size + point.borderWidth}
            fill="rgba(0, 0, 0, .07)"
          />
          <rect
            x={point.size * -0.5}
            y={point.size * -0.5}
            width={point.size}
            height={point.size}
            fill={point.color}
            stroke={point.borderColor}
            strokeWidth={point.borderWidth}
          />
        </>
      )}
    </g>
  );
};

export default Point;
