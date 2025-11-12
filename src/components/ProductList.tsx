import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetProducts } from "../hooks";
import { useNavigate } from "react-router-dom";
import Product from "../types";

export default function ProductList() {
  const { products, error, isLoading } = useGetProducts();

  const navigate = useNavigate();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="productlist">
      <h1 className="text-base font-semibold py-4">
        Welcome to FA Online Shop
      </h1>

      <div className="grid grid-cols-1 grid-flow-row gap-4">
        {products.map((product: Product) => (
          <Card key={product.id} className="">
            <CardHeader>
              <img
                src={product.image}
                alt="productImage"
                className="w-40 mx-auto"
              />
              <CardTitle className="text-md lg:text-md">
                {product.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm lg:text-md">
              <CardDescription className="py-1">
                {product.description}
              </CardDescription>

              <p className="py-1">Price: {product.price}sek</p>
              <p className="py-1">Rate: {product.rating.rate}</p>
              <p className="py-1">Reviews: {product.rating.count}</p>

              <Button
                className="my-2"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                Go To Product
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
