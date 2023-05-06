import "./ItemListContainer.scss";

export const ItemLisContainer = ({ saludo }) => {
  return (
    <div className="list__container">
      <h2>Item List Container</h2>
      <hr />
      <p>{saludo}</p>
    </div>
  );
};
