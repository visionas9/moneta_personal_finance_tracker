const links: string[] = ["Dashboard", "Transactions", "Categories", "Settings"];

export default function SideNavBar() {
  return (
    <aside
      className="w-64 h-full flex flex-col items-center 
    font-montserrat bg-ink-black"
    >
      <nav className="mt-3">
        <p className="text-sm text-lighter-text mb-2">MENU</p>
        <ul className="flex flex-col gap-y-4 text-mint-cream">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-pumpkin-spice cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
