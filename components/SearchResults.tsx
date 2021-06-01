import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    priceFormated: string;
    price: number;
    title: string;
  }>;
  addToWhishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  addToWhishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            addToWhishList={addToWhishList}
          />
        );
      })}
    </div>
  );
}
