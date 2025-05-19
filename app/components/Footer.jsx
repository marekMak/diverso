import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full min-h-[40vh] px-10 lg:px-40 grid grid-cols-1 gap-8 lg:grid-cols-3 py-10 z-20 justify-items-center text-[#DEDED6]"
      style={{
        backgroundImage: `url('/footer.jpg')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <h5 className="text font-semibold uppercase">Kontakt</h5>
        <ul className="text-sm flex flex-col gap-2 items-center lg:items-start">
          <li className="font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Dudvážska 2, 821 07 Bratislava
          </li>
          <li className="font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-smartphone-icon lucide-smartphone"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            <a href="tel:+421915170137">+421 915 170 137</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h5 className="text font-semibold uppercase">Otváracie hodiny</h5>
        <ul className="flex flex-col items-center">
          <li className="text-sm font-semibold">Pondelok - Štvrtok</li>
          <li>6.30 - 22.00</li>
          <li className="text-sm font-semibold">Piatok - Sobota</li>
          <li>6.30 - 23.00</li>

          <li className="text-sm font-semibold">Nedeľa</li>
          <li>8.00 - 21.00</li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-2">
          <li>
            <a href="https://www.facebook.com/diverso.cafe.bar.more/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
        </ul>
      </div>
    </div>
  );
};

export default Footer;
