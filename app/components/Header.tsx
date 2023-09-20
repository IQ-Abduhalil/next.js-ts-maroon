import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/icons/MAROON.svg";
import Account from "../../public/assets/icons/account.svg";
import Cart from "../../public/assets/icons/cart.svg";

function Header() {
  return (
    <div className="header">
      <div className="container mx-auto flex justify-between py-10">
        <Link href="/">
          <Image alt="img" src={Logo}></Image>
        </Link>
        <nav className="flex gap-9 text-color-first">
          <Link href="/products">Products</Link>
          <Link href="/">Каталог</Link>
          <Link href="/">О нас</Link>
          <Link href="/">Контакты</Link>
          <Link href="/">
            <Image src={Account} alt="img" />
          </Link>
          <Link href="/cart">
            <Image src={Cart} alt="img" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
