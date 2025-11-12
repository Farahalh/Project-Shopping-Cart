import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { productAtom, Product } from "@/atoms/product";

export default function CartItem() {
  const [productsAtom, setProductsAtom] = useAtom(productAtom);

  // deleting product from array based on id onClick, keeping rest of array
  const deleteItem = (productId: number) => {
    setProductsAtom((prevProducts) => {
      const index = prevProducts.findIndex(
        (product) => product.id === productId
      );
      if (index !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts.splice(index, 1);
        return updatedProducts;
      }
      return prevProducts;
    });
  };

  console.log(productsAtom);

  return (
    <div className="cartItem">
      {/* mapping through productsAtom that was saved in array and displayes each in below Card */}
      {productsAtom.map((productsAtom: Product) => (
        <div className="pb-4">
          <Card key={productsAtom.id} className="">
            <CardHeader>
              <img src={productsAtom.image} alt="productImg" className="w-40 mx-auto" />
            </CardHeader>

            <CardContent className="p-8">
              <p className="text-sm lg:text-md py-1">{productsAtom.title}</p>
              <p className="text-sm lg:text-md py-1">{productsAtom.price} sek</p>

              <div className="">
                {/* Decrement onClick search index of array*/}
                <Button
                  className="my-2"
                  variant="outline"
                  onClick={() => {
                    setProductsAtom((prevProducts) => {
                      const index = prevProducts.findIndex(
                        (product) => product.id === productsAtom.id
                      );

                      // if more than 1 decrement
                      if (index !== -1 && prevProducts[index].quantity > 1) {
                        const updatedProducts = [...prevProducts];
                        updatedProducts[index] = {
                          ...updatedProducts[index],
                          quantity: updatedProducts[index].quantity - 1,
                        };
                        return updatedProducts;
                      }

                      // if less or equal than 1 remove from array
                      if (index !== -1 && prevProducts[index].quantity <= 1) {
                        const updatedProducts = [...prevProducts];
                        updatedProducts.splice(index, 1);
                        return updatedProducts;
                      }

                      return prevProducts;
                    });
                  }}
                >
                  -
                </Button>

                {/* displayes produc quantity */}
                <span id="quantity" className="px-2">
                  {productsAtom.quantity}
                </span>

                {/* Increment onClick search index of array*/}
                <Button
                  className="my-2"
                  variant="outline"
                  onClick={() => {
                    setProductsAtom((prevProducts) => {
                      const index = prevProducts.findIndex(
                        (product) => product.id === productsAtom.id
                      );

                      // if not -1 increment
                      if (index !== -1) {
                        const updatedProducts = [...prevProducts];
                        updatedProducts[index] = {
                          ...updatedProducts[index],
                          quantity: updatedProducts[index].quantity + 1,
                        };
                        return updatedProducts;
                      }

                      return prevProducts;
                    });
                  }}
                >
                  +
                </Button>
              </div>

              {/* button for remove product entirely from cart */}
              <Button
                className="my-2"
                variant="outline"
                onClick={() => deleteItem(productsAtom.id)}
              >
                <FaRegTrashCan />
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
