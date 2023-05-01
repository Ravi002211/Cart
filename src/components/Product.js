import React from "react";

export default function Product(props) {
  console.log(props);
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary col-3">
            ₹{props.product.price}
          </span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger">
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-success">
            +
          </button>
        </div>
      </div>
      <div className="col-2  mb-3">
        {props.product.quantity * props.product.price}
      </div>
      <button className="col-2 btn btn-danger mb-3">Remove</button>
    </div>
  );
}
