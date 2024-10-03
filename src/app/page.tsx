import Link from "next/link"

export default function Home (){
  return(
    <main>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./images/bg.jpeg')" }}
        ></div>

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Text Content */}
        <div className="relative flex items-center justify-center h-[80vh] z-10">
          <div className="text-center">
          <h2 className= "text-white text-3xl font-bold mb-4">Welcome to Quote Haven</h2>
          <h3 className="text-xm text-white">Dicover Your Next Favorite Quote </h3>
          {/* buttons  */}
          <div className=" flex flex-wrap gap-3">
            <button className="btn">Inspirational</button>
            <button className="btn">Motivational</button>
            <button className="btn">life</button>
            <button className="btn">Wisdom</button>
            <button className="btn">Happiness</button>
            <button className="btn">Friendship</button>
            <button className="btn">Succces</button>

        </div>
          </div>
          </div>
      </div>
    </main>
  )
}