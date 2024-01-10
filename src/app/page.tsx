import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] container]">
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded shadow-md max-w-md">
          <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
          <p className="text-gray-600 mb-8">
            Test your knowledge with our quizzes!
          </p>
          <Link href="/quiz">
            <button className="bg-[#FF5261] hover:bg-[#ec4e5b]  text-white py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
