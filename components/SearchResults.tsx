import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} addToWhishList={addToWhishList} />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={600}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
