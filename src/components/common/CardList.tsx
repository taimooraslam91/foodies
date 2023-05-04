import VendorCard from "./VendorCard";
import { Restaurant } from "../../types/data";

interface CardListProps {
  restaurants: Restaurant[];
}

function CardList({ restaurants }: CardListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {restaurants.map((resturant: any) => (
        <VendorCard resturant={resturant} />
      ))}
    </div>
  );
}

export default CardList;
