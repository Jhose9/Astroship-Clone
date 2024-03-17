import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "@/styles/styles.css";

function Navbar() {
  const [chevrondown, setChevrondown] = useState(false);
  return (
    <div className="nav-body">
      <div className="nav-title">
        <h2 className="text-lg">
          <strong>Astro</strong>ship
        </h2>
      </div>

      <div className="nav-options">
        <DropdownMenu open={chevrondown} onOpenChange={setChevrondown}>
          <DropdownMenuTrigger className="flex items-end">
            <p>Features</p>
            {chevrondown ? (
              <ChevronUp size={22} className="opacity-50" />
            ) : (
              <ChevronDown size={22} className="opacity-50" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>Dropdown Submenu</DropdownMenuItem>
            <DropdownMenuItem>404 page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <p>Pricing</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <div className="flex items-center gap-2">
          <p>Pro Version</p>
          <div className="nav-register-title-new rounded-lg h-5 w-10 animate-pulse">
            <span className="text-xs text-white">New</span>
          </div>
        </div>
      </div>

      <div className="nav-register">
        <Menu className="nav-menu" />
        <div className="nav-register-buttons">
          <p>Log in</p>
          <Button className="h-11 w-24 text-base hover:bg-slate-700">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
