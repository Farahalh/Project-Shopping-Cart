import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <Menubar className="flex p-8">
        <MenubarMenu>
          <MenubarTrigger>
            <RxHamburgerMenu />
          </MenubarTrigger>
          <Link to={"/"} className="flex-1">
            FA.COM
          </Link>

          <MenubarContent>
            <MenubarItem>New Items</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Clothes</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Bags</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Shoes</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <Link to={"/cart"}>
          <Button variant="outline">
            <TiShoppingCart />
          </Button>
        </Link>
      </Menubar>
    </div>
  );
}
