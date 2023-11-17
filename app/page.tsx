import Link from "next/link";

export default function Home() {
  return (
      <div className="max-w-xl p-8 bg-white shadow-lg rounded-lg text-gray-300 md:max-w-xl">
        <h1 className="text-3xl font-bold mb-2 font-roboto text-center md:text-left">
          Welcome to our digital documents platform
        </h1>
        <p className="text-gray-700 text-m font-roboto text-center md:text-left">
          Where efficiency meets creativity. Our mission is to provide you with
          a seamless experience in creating and securely storing digital
          documents. Whether you're a student, professional, or simply
          passionate about document management, our platform is your key to
          effortlessly crafting, organizing, and safeguarding your valuable
          content.
        </p>
        <div className="text-center md:text-left">
          <button className="bg-rose-300 text-white font-semibold py-2 px-4 mt-4 rounded hover:bg-rose-00 mx-auto">
            <Link href="/add-document">Get Started</Link>
          </button>
        </div>
 
    </div>
  );
}

