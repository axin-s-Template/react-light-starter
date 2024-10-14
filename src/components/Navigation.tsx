import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link } from "react-router-dom";
/** 导航栏 */
const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 mt-6">
      <div className="text-2xl text-brand font-bold">
        <Link to="/">小游戏</Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/rules" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                规则
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/gift" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                福利
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;
