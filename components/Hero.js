import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto w-auto flex px-8 py-8 flex-col-reverse items-center md:flex-row ">
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-5/6">
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-700">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="mb-8  text-2xl leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded-md text-lg">
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-auto md:mb-5 ">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width="243"
            height="243"
            src="/profile.png"
          />
        </div>
      </div>
    </section>
  );
}
