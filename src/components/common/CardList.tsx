import { resturants } from "../../data";
import VendorCard from "./VendorCard";

function CardList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {resturants.map((resturant: any) => (
        <VendorCard resturant={resturant} />
      ))}
    </div>
  );
}

export default CardList;
