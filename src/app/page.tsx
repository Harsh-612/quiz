import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-4xl font-extrabold mb-4">Quiz App</h1>
        <p className="text-gray-700 mb-8">
          Test your knowledge with our quizzes!
        </p>
        <Link href="/quiz">
          <button className="bg-[#FF5261] hover:bg-[#ec4e5b] text-white py-2 px-4 rounded transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  );
}
