import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import memoji from "../images/memoji.png"

export default function Index() {
  return (
    // fixes h-screen being longer than viewport on mobile
    <div className="absolute inset-0">
      <div className="min-h-screen lg:w-2/3 flex">
        <main className="px-[50px] md:px-[100px] py-[50px] md:py-[100px] flex flex-col">
          <div className="flex flex-col items-start space-y-5">
            <span className="h-32 w-32 bg-pink-600 rounded-full mr-4 memoji">
              <img
                src={memoji}
                alt="angie's memoji"
                className="min-h-32 min-w-32 max-h-32 max-w-32"
              />
            </span>
            <h1 className="font-bold text-4xl">
              Hiya, I'm Angie Merryweather 👋
            </h1>
            <p>
              I'm a freelance software engineer specialising in React and
              frontend tooling. I love cultivating healthy, high empathy teams
              and building great online experiences.
            </p>
            <p>
              You can{" "}
              <a
                className="underline underline-offset-2 decoration-pink-600 decoration-4"
                href="mailto:hi@angie.io"
              >
                email
              </a>{" "}
              me to get in touch, or connect via social.
            </p>
          </div>
          <div className="py-10 flex flex-row space-x-4">
            <a
              href="https://github.com/angie"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/angie-merryweather/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/amerry"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
