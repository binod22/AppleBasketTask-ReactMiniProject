const AppleBasket = ({ count, basketName }) => {
  return (
    <div className="basket">
      <h1>
        <span>{count}</span> apples
      </h1>
      <p>
        {basketName}
        {count === 10 && '(Full)'}
        {console.log(count)}
        {count === 0 && '(Empty)'}
      </p>
    </div>
  );
};

export default AppleBasket;
