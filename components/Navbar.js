import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <header class="body-font border-b">
      <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavButton text="Works" />
          <NavButton text="Blog" />
          <NavButton text="Contact" />
        </nav>
      </div>
    </header>
  );
}
