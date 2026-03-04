"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const names = ["Dashboard", "Transactions", "Categories", "Settings"];

export default function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside
      className="h-screen sticky top-0 w-64 h-full flex flex-col items-center
   font-montserrat bg-ink-black"
    >
      <nav className="mt-3">
        <p className="text-sm text-lighter-text mb-2">MENU</p>
        <ul className="flex flex-col gap-y-4 text-mint-cream">
          {names.map((name) => (
            <li
              key={name}
              className="hover:text-pumpkin-spice cursor-pointer transition"
            >
              <Link
                className={
                  pathname ===
                  (name === "Dashboard" ? "/" : `/${name.toLowerCase()}`)
                    ? "text-pumpkin-spice"
                    : undefined
                }
                href={name === "Dashboard" ? "/" : `/${name.toLowerCase()}`}
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
