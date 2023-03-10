import "./OrderingNextButton.scss";

const OrderingNextButton = () => {
  return (
    <button className="basket-button-next">
      <span>Оформити замовлення</span>
      <span className="basket-button-next-arrow">
        <span></span>
        <span></span>
      </span>
    </button>
  );
};

export default OrderingNextButton;
