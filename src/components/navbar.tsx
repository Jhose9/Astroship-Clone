import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import NavbarOptions from "@/components/navbarOptions";
import "@/styles/styles.css";

function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleMenu = () => {
    if (burgerMenu) {
      setBurgerMenu(false);
    } else {
      setBurgerMenu(true);
    }
  };
  return (
    <main>
      <div className="nav-body px-6">
        <div className="nav-title">
          <h2 className="text-lg">
            <a href="http://localhost:4321">
              <strong>Astro</strong>ship
            </a>
          </h2>
        </div>
        <NavbarOptions className="nav-options" />

        <div className="nav-register">
          {burgerMenu ? (
            <X className="nav-menu" onClick={handleMenu} />
          ) : (
            <Menu className="nav-menu" onClick={handleMenu} />
          )}
          <div className="nav-register-buttons">
            <p>Log in</p>
            <Button className="h-11 w-24 text-base hover:bg-slate-700">
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {burgerMenu && (
        <NavbarOptions className="nav-options-burguer space-y-5 pl-7 pt-2" />
      )}
    </main>
  );
}

export default Navbar;
