import Link from "next/link";

export default function NavButton({ text }) {
  return (
    <>
      <Link href="/">
        <a className="m-3  text-black text-tiny font-semibold hover:text-gray-600">
          {text}
        </a>
      </Link>
    </>
  );
}
