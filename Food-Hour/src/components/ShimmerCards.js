const ShimmerCard = () => {
  return (
    <div className="shimmerCard">
      <div className="img"></div>
      <div className="txt"></div>
      <div className="txt"></div>
      <div className="txt"></div>
      <div className="btn"></div>
      <div className="btn"></div>
    </div>
  );
};
const ShimmerCards = () => {
  return (
    <div className="shimmerContainer">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default ShimmerCards;
