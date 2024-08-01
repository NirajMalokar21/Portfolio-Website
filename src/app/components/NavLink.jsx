import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-semibold py-2 pl-3 pr-4 text-[#161718] sm:text-xl rounded md:p-0 hover:text-primary"
    >
      {title}
    </Link>
  );
};

export default NavLink;
