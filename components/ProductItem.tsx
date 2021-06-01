import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  addToWhishList: (id: number) => void;
}

function ProductItemComponent({ product, addToWhishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => addToWhishList(product.id)}>Add to list</button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
