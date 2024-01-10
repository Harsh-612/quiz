import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto h-screen flex items-center justify-between overflow-hidden">
      <div className="p-8 text-gray-800">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
          Welcome to Quizzy!
        </h1>
        <p className="text-grey-700 text-xl mb-8">
          Expand your knowledge and have fun with Quizzy. Choose from a variety
          of quizzes to test your expertise!
        </p>
        <Link href="/quiz">
          <button className="bg-[#FF5261] hover:bg-[#ec4e5b] text-white py-3 px-6 rounded-full focus:outline-none focus:ring focus:border-blue-300 text-lg">
            Get Started
          </button>
        </Link>
      </div>
      <div>
        <img
          src="/Learning-cuate.png"
          alt="Learning illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
