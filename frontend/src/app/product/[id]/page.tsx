import React from "react";

async function Product({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>page: {id}</div>;
}

export default Product;
