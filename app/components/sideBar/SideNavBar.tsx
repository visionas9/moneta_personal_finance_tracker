"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Transactions", href: "/transactions" },
  { name: "Categories", href: "/categories" },
];

export default function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="shrink-0 bg-ink-black font-montserrat border-b border-lighter-text/10 md:w-56 md:border-b-0">
      <nav className="px-4 py-3 md:px-8 md:pt-6">
        <p className="hidden md:block text-sm text-lighter-text mb-3">MENU</p>
        <ul className="flex gap-6 md:flex-col md:gap-4 text-mint-cream">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`transition hover:text-pumpkin-spice ${
                  pathname === href ? "text-pumpkin-spice" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
