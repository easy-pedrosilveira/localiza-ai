import { linksOfNavigation } from "@/const/linksOfNavigation";
import Link from "next/link";

export function ItemsOfHeader() {
  return (
    <>
      <div className="w-12 h-12 rounded-lg bg-black-33303E" />
      <nav className="flex gap-10 text-gray-495263">
        {linksOfNavigation.map((items, index) => (
          <Link key={index} href={items?.name}>
            {items?.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
