import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-full h-screen relative z-20"
      style={{
        backgroundImage: `url('/3.jpg')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(rgba(51,33,29,0.6),rgba(51,33,29,0.45))] z-30"></div>
      <div className="absolute top-[50%] translate-y-[-50%] left-6 w-[90%] lg:w-full lg:left-40 flex flex-col gap-8 z-50">
        <Image
          src="/logoFlower.svg"
          width={500}
          height={500}
          alt="diverso café logo"
        />
        <h2 className="text-4xl lg:text-5xl uppercase font-bold">
          café & bar & more
        </h2>
      </div>

      <div className="absolute top-4 right-4 lg:right-10 z-40">
        <ul className="flex gap-2 items-center">
          <li>
            <a href="https://www.facebook.com/diverso.cafe.bar.more/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24
                 24"
                fill="none"
                stroke="#F78F21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/diverso.sk/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24
                 24"
                fill="none"
                stroke="#F78F21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </li>
          <li className="font-semibold flex gap-2 items-center text-xl">
            <a href="tel:+421915170137" className="text-[#F78F21]">
              +421 915 170 137
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
