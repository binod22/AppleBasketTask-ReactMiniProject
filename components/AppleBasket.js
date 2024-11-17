const AppleBasket = ({ count, basketName }) => {
  return (
    <div className="basket">
      <h1>
        <span>{count}</span> apples
      </h1>
      <p>{basketName}</p>
    </div>
  );
};

export default AppleBasket;
