import Link from "next/link";

export default function NavButton({ text, url }) {
  return (
    <>
      <Link href={url ? url : "/"}>
        <a className="m-3  text-black text-lg font-medium hover:text-gray-600">
          {text}
        </a>
      </Link>
    </>
  );
}
