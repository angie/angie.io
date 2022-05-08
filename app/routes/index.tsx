import memoji from "../images/memoji.png"

export default function Index() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <main className="px-[50px] md:px-[100px] flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center sm:items-start text-6xl">
          <span className="h-32 w-32 bg-pink-600 rounded-full mr-4 memoji">
            <img
              src={memoji}
              alt="angie's memoji"
              className="min-h-32 min-w-32 max-h-32 max-w-32"
            />
          </span>
          <h1 className="text-pink-100 text-6xl font-bold">
            Hiya, I'm Angie 👋
          </h1>
        </div>
      </main>
    </div>
  )
}
