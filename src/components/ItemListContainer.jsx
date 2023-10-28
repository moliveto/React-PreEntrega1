// eslint-disable-next-line react/prop-types
function ItemListContainer({ greeting }) {
  return (
    <>
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <h2 style={{ fontFamily: "sans-serif" }}>
          {greeting}
          <span className="">
            <i className=""></i>
          </span>
        </h2>
      </div>
    </>
  );
}

export default ItemListContainer;