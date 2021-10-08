import Link from "next/link";

export default function NavButton({ text }) {
  return (
    <>
      <Link href="/">
        <a className="m-3  text-black text-lg font-medium hover:text-gray-600">
          {text}
        </a>
      </Link>
    </>
  );
}
