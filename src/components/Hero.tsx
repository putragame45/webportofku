import Image from "next/image";
import Model3D from "./Model3D";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) 
{
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11
        h-11
        rounded-full
        border
        border-white/30
        flex
        items-center
        justify-center
        text-white/80
        hover:text-[#7127BA]
        hover:border-[#7127BA]
        hover:shadow-[0_0_15px_rgba(113,39,186,0.6)]
        transition-all
        duration-300
      "
    >
      {children}
    </a>
  );
}
export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto pt-40">

        {/* Atas */}
        <div className="relative flex items-center gap-16">

          

          <div className="absolute top-[-25px] left-[180px] z-30 hover:translate-y-1 transition-transform duration-300">
            <Image
            src="/icons/Arrow.svg"
            alt="Arrow"
            width={130}
            height={110}
            />
          </div>
          {/* Avatar */}
          <div className="relative ml-10">
            <div className="
              absolute
              -inset-12
              bg-purple-700
              opacity-40
              blur-3xl
              rounded-full
            "/>
    
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={200}
              height={200}
              className="relative z-10
              "/>
            
          </div>

          {/* Text */}
          <div>
            <p className="
            font-preahvihear
            text-lg
            ">
              Hello! I Am{" "}
              <span className="text-[#7127BA]">
              Putra Swargaloka{" "}
              </span>
              <span className="text-white">
              IT
              </span>
            </p>

            <p className="font-preahvihear mt-3 text-sm text-gray-300">
              a student ITS
            </p>

            <h1
              className="
              font-preahvihear
              mt-2
              text-[50px]
              leading-tight
              tracking-[1px]
              "
            >
              Nekat adalah
              <br />
              skill{" "}
              <span className="text-[#7127BA]">
                No. 1
                <Image
                src="/icons/Ellipse.svg"
                alt="Ellipse"
                width={200}
                height={200}
                className="absolute top-[125px] left-[400px] z-30 pointer-events hover:translate-y-1 transition-transform duration-300"
                />
                  
              </span>
            </h1>
            <p
              className="
              font-preahvihear
              mt-3"
              >
              Cobalah dulu jangan takut gagal, nekatlah sebelum menyesal nanti
            </p>

            {/* Icon */}
            <div className="flex gap-4 mt-6 duration-300
                hover:bg-[#]
                hover:scale-105
                active:scale-95">
              <SocialIcon href="https://www.instagram.com/swargalokaput_/">
                <FaInstagram size={25} />
              </SocialIcon>

              <SocialIcon href="https://www.linkedin.com/in/swargalokaput/">
                <FaLinkedin size={25} />
              </SocialIcon>

              <SocialIcon href="https://wa.me/6287810642215">
                <FaWhatsapp size={25} />
              </SocialIcon>

              <SocialIcon href="https://github.com/putragame45">
                <FaGithub size={25} />
              </SocialIcon>
            </div>
          </div>

        </div>

        {/* Bawah */}
        <div className="mt-20">
          <p className="font-preahvihear text-3xl">
            I'm a
          </p>

          <h2
            className="
              animate-fade-up
              font-lato
              font-bold
              mt-2
              text-[96px]
              leading-tight
              bg-gradient-to-r
              from-[#7127BA]
              via-white
              to-white
              bg-clip-text
              text-transparent
              transition-all
              duration-500
              hover:scale-105
              hover:drop-shadow-[0_0_20px_rgba(113,39,186,0.7)]
            "
          >
          UI/UX Designer
          </h2>

         {/* Statistics */}
        <div
          className="
            mt-2
            max-w-[686px]
            bg-transparent
            backdrop-blur-lg
            rounded-2xl
            px-8
            py-7
            flex
            justify-between
            items-center
          "
        >
          {/* Item 1 */}
          <div className="flex-1 hover:translate-y-1 transition-transform duration-300">
            <h3 className="text-[#7127BA] text-4xl font-bold">
              10+
            </h3>

            <p className="mt-2 text-xl text-white">
              Experiences
            </p>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-20 bg-white/50 mx-8" />

          {/* Item 2 */}
          <div className="flex-1 hover:translate-y-1 transition-transform">
            <h3 className="text-[#7127BA] text-4xl font-bold">
              4+
            </h3>

            <p className="mt-2 text-xl text-white">
              Software Skills
            </p>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-20 bg-white/50 mx-8" />

          {/* Item 3 */}
          <div className="flex-1 hover:translate-y-1 transition-transform duration-300">
            <h3 className="text-[#7127BA] text-4xl font-bold">
              20+
            </h3>

            <p className="mt-2 text-xl text-white">
              Project Design
            </p>
          </div>
          
        </div>

        <div className="flex gap-4 mt-8">
        
          <button
            className="
              px-10
              py-4
              bg-[#7127BA]
              rounded-xl
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#8334d4]
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(113,39,186,0.6)]
              active:scale-95
            "
            >
            Hire Me
            </button>

          
          <a
            href="/CV/CVku.png"
            download
            className="
                px-10
                py-4
                bg-[#]
                border
                border-white/50
                rounded-xl
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#]
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(113,39,186,0.6)]
                active:scale-95"
          >Download CV</a>
  
        </div>
          
        </div>

      </div>
    </section>
  );
}