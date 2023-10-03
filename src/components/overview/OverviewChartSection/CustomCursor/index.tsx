const CustomCursor = (props) => {
  const { points, activeDotPos } = props;

  const startingPoint = points[0];
  const endingPoint = points[1];

  const [x1, y1] = [startingPoint.x, activeDotPos.y + 7]; // adding 7 to y to prevent cursor from overlapping with active dot
  const [x2, y2] = [endingPoint.x, endingPoint.y];

  return (
    <svg x1={x1} y1={y1} x2={x2} y2={y2}>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={"#e6e8f0"}
        strokeWidth={1}
      />
    </svg>
  );
};

export default CustomCursor;
