

const Item = ({ title, image, price }) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt="imagen"/>
      <h2>${price}</h2>
    </>
  );
};
export default Item;