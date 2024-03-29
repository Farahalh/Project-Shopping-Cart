import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// get 10 products from API
export function useGetProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryFn: () =>
      fetch("https://fakestoreapi.com/products?limit=10").then((res) =>
        res.json()
      ),
    queryKey: ["products"],
  });

  return {
    products,
    error,
    isLoading,
  };
}

// get one product based on id
export function useGetProduct() {
  const { productId } = useParams();

  const {
    data: singleProduct,
    error,
    isLoading,
  } = useQuery({
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${productId}`).then((res) =>
        res.json()
      ),
    queryKey: ["productId", productId],
  });

  return {
    singleProduct,
    error,
    isLoading,
  };
}
