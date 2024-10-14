"use client";
import {
  HomeIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const SideMenu = ({ menuCategory }) => {
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "My Services", icon: WrenchScrewdriverIcon },
    { name: "Jobs", icon: ChatBubbleLeftRightIcon },
    { name: "Earnings", icon: CurrencyDollarIcon },
    { name: "Reviews", icon: ChatBubbleLeftRightIcon },
    { name: "Help", icon: QuestionMarkCircleIcon },
  ];

  return (
    <aside className="w-64 bg-dark flex flex-col shadow-lg">
      <div className="brand-name p-6">
        <h1 className="text-3xl font-bold">FixIt</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
              onClick={() => menuCategory(`${item.name}`)}
            >
              <item.icon className="w-6 h-6 mr-3 text-light" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
