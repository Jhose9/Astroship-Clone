import { useState} from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from "@/lib/utils"

interface navbarOptionsProps {
    className:string;
}

function NavbarOptions({className}:navbarOptionsProps) {
    const [chevrondown, setChevrondown] = useState(false);
  return (
    <div className={cn(className)}>
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
          <a
            href="https://astroship-pro.web3templates.com/"
            className="flex items-center gap-2"
          >
            <p>Pro Version</p>
            <div className="nav-register-title-new rounded-lg h-5 w-10 animate-pulse">
              <span className="text-xs text-white">New</span>
            </div>
          </a>
        </div>
  )
}

export default NavbarOptions