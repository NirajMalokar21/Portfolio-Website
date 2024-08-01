import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-semibold py-2 pl-3 pr-4 sm:text-xl text-white rounded md:p-0 hover:text-slate-900"
    >
      <p>{title}</p>
    </Link>
  );
};

export default NavLink;
