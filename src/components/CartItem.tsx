import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { productAtom, Product } from "@/atoms/product";

export default function CartItem() {
  const [productsAtom, setProductsAtom] = useAtom(productAtom);

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

  return (
    <div className="cartItem">
      {productsAtom.map((productsAtom: Product) => (
        <div key={productsAtom.id} className="pb-4">
          <Card className="">
            <CardHeader>
              <img src={productsAtom.image} alt="productImg" className="w-40 mx-auto" />
            </CardHeader>

            <CardContent className="p-8">
              <p className="text-sm lg:text-md py-1">{productsAtom.title}</p>
              <p className="text-sm lg:text-md py-1">{productsAtom.price} sek</p>

              <div className="">
                <Button
                  className="my-2"
                  variant="outline"
                  onClick={() => {
                    setProductsAtom((prevProducts) => {
                      const index = prevProducts.findIndex(
                        (product) => product.id === productsAtom.id
                      );

                      if (index !== -1 && prevProducts[index].quantity > 1) {
                        const updatedProducts = [...prevProducts];
                        updatedProducts[index] = {
                          ...updatedProducts[index],
                          quantity: updatedProducts[index].quantity - 1,
                        };
                        return updatedProducts;
                      }

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

                <span id="quantity" className="px-2">
                  {productsAtom.quantity}
                </span>

                <Button
                  className="my-2"
                  variant="outline"
                  onClick={() => {
                    setProductsAtom((prevProducts) => {
                      const index = prevProducts.findIndex(
                        (product) => product.id === productsAtom.id
                      );

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
