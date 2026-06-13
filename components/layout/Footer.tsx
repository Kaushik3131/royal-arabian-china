import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="px-[80px] pt-[72px] pb-8">
          <div className="flex justify-between gap-[44px] pb-[80px]">
            <div className="flex flex-col gap-[32px] flex-1">
              {/* Logo */}
              <div className="h-[32px] relative w-[150px]">
                <Image
                  alt="Royal Arabian"
                  src="/logo_footer.svg"
                  fill
                  sizes="150px"
                  className="brightness-0 invert object-contain"
                />
              </div>

              {/* Office Details */}
              <div className="flex w-[80%] justify-between">
                <div className="flex flex-col gap-[4px] mr-[15px]">
                  <h3 className="text-white font-semibold text-[18px] leading-[28.8px] mb-0">
                    Dubai Head Office :
                  </h3>
                  <p className="text-white font-roboto text-[14px] leading-[21px] max-w-[323px]">
                    Royal Arabian Destination Management DMCC <br />
                    2102, Jumeirah Bay X3, Plot No: JLT-PH2-X3A, <br />
                    Jumeirah Lake Tower, 117689, <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
                <div className="flex flex-col gap-[4px] mr-[13px]">
                  <h3 className="text-white font-semibold text-[18px] leading-[28.8px] mb-0">
                    Abu Dhabi Office :
                  </h3>
                  <p className="text-white font-roboto text-[14px] leading-[21px] max-w-[364px]">
                    Royal Arabian Tours LLC <br />
                    Rashid Saif Jabr Alsuweidi Building 2, <br />
                    Musaffah M39, Office Number 2, <br />
                    Abu Dhabi, United Arab Emirates <br />
                  </p>
                </div>
                <div className="flex flex-col gap-[4px] mr-px">
                  <h3 className="text-white font-semibold text-[18px] leading-[28.8px] mb-0">
                    Shanghai Office :
                  </h3>
                  <p className="text-white font-roboto text-[14px] leading-[21px] max-w-[364px]">
                    Room 7025, Zhongyi Building, <br />
                    No. 580 West Nanjing Road, <br />
                    Jingan District, <br />
                    Shanghai, China. <br />
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                  href="https://www.facebook.com/royalarabiandmc"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Icon</title>
                    <path
                      d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                  href="https://www.instagram.com/royalarabiandmc/"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Icon</title>
                    <path
                      d="M9 0C6.556 0 6.25 0.01 5.289 0.054C4.33 0.098 3.677 0.25 3.105 0.473C2.513 0.702 2.011 1.009 1.511 1.511C1.009 2.011 0.702 2.513 0.473 3.105C0.25 3.677 0.098 4.33 0.054 5.289C0.01 6.25 0 6.556 0 9C0 11.444 0.01 11.75 0.054 12.711C0.098 13.67 0.25 14.323 0.473 14.895C0.702 15.487 1.009 15.989 1.511 16.489C2.011 16.991 2.513 17.298 3.105 17.527C3.677 17.75 4.33 17.902 5.289 17.946C6.25 17.99 6.556 18 9 18C11.444 18 11.75 17.99 12.711 17.946C13.67 17.902 14.323 17.75 14.895 17.527C15.487 17.298 15.989 16.489 16.489 16.489C16.991 15.989 17.298 15.487 17.527 14.895C17.75 14.323 17.902 13.67 17.946 12.711C17.99 11.75 18 11.444 18 9C18 6.556 17.99 6.25 17.946 5.289C17.902 4.33 17.75 3.677 17.527 3.105C17.298 2.513 16.991 2.011 16.489 1.511C15.989 1.009 15.487 0.702 14.895 0.473C14.323 0.25 13.67 0.098 12.711 0.054C11.75 0.01 11.444 0 9 0ZM9 1.622C11.403 1.622 11.688 1.631 12.637 1.675C13.514 1.715 13.991 1.862 14.308 1.984C14.728 2.146 15.028 2.342 15.343 2.657C15.658 2.972 15.854 3.272 16.016 3.692C16.138 4.009 16.285 4.486 16.325 5.363C16.369 6.312 16.378 6.597 16.378 9C16.378 11.403 16.369 11.688 16.325 12.637C16.285 13.514 16.138 13.991 16.016 14.308C15.854 14.728 15.658 15.028 15.343 15.343C15.028 15.658 14.728 15.854 14.308 16.016C13.991 16.138 13.514 16.285 12.637 16.325C11.688 16.369 11.403 16.378 9 16.378C6.597 16.378 6.312 16.369 5.363 16.325C4.486 16.285 4.009 16.138 3.692 16.016C3.272 15.854 2.972 15.658 2.657 15.343C2.342 15.028 2.146 14.728 1.984 14.308C1.862 13.991 1.715 13.514 1.675 12.637C1.631 11.688 1.622 11.403 1.622 9C1.622 6.597 1.631 6.312 1.675 5.363C1.715 4.486 1.862 4.009 1.984 3.692C2.146 3.272 2.342 2.972 2.657 2.657C2.972 2.342 3.272 2.146 3.692 1.984C4.009 1.862 4.486 1.715 5.363 1.675C6.312 1.631 6.597 1.622 9 1.622Z"
                      fill="white"
                    />
                    <path
                      d="M9 4.378C6.478 4.378 4.378 6.478 4.378 9C4.378 11.522 6.478 13.622 9 13.622C11.522 13.622 13.622 11.522 13.622 9C13.622 6.478 11.522 4.378 9 4.378ZM9 12C7.372 12 6 10.628 6 9C6 7.372 7.372 6 9 6C10.628 6 12 7.372 12 9C12 10.628 10.628 12 9 12Z"
                      fill="white"
                    />
                    <path
                      d="M14.884 4.195C14.884 4.794 14.401 5.277 13.802 5.277C13.203 5.277 12.72 4.794 12.72 4.195C12.72 3.596 13.203 3.113 13.802 3.113C14.401 3.113 14.884 3.596 14.884 4.195Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label="X"
                  href="https://twitter.com/RoyalArabianDMC"
                >
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Icon</title>
                    <path
                      d="M14.1433 0H16.9194L10.8949 6.78954L18 16H12.4456L8.09489 10.4121L3.11694 16H0.339273L6.79644 8.72383L0 0H5.69544L9.61356 5.09537L14.1433 0ZM13.1803 14.3754H14.7095L4.88222 1.51464H3.24156L13.1803 14.3754Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/royalarabiandmc/"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Icon</title>
                    <path
                      d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V6.75H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V11.19C12.6 10.17 12.58 8.87 11.19 8.87C9.78 8.87 9.57 9.96 9.57 11.13V15.3H6.87V6.75H9.45V8.01H9.49C9.84 7.35 10.71 6.65 12 6.65C14.73 6.65 15.3 8.47 15.3 10.83V15.3Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label="Youtube"
                  href="https://www.youtube.com/channel/UCnrMygEtFzN47ORUxHVdfIw"
                >
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Icon</title>
                    <path
                      d="M17.1562 2.03125C16.9531 1.25 16.3438 0.640625 15.5625 0.4375C14.2031 0.0625 8.99062 0.0625 8.99062 0.0625C8.99062 0.0625 3.77812 0.0625 2.41875 0.4375C1.6375 0.640625 1.02812 1.25 0.825 2.03125C0.45 3.39062 0.45 6.25 0.45 6.25C0.45 6.25 0.45 9.10937 0.825 10.4688C1.02812 11.25 1.6375 11.8594 2.41875 12.0625C3.77812 12.4375 8.99062 12.4375 8.99062 12.4375C8.99062 12.4375 14.2031 12.4375 15.5625 12.0625C16.3438 11.8594 16.9531 11.25 17.1562 10.4688C17.5312 9.10937 17.5312 6.25 17.5312 6.25C17.5312 6.25 17.5312 3.39062 17.1562 2.03125ZM7.26562 8.84375V3.65625L11.6719 6.25L7.26562 8.84375Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="w-[125px]">
              <h3 className="text-white font-semibold text-[18px] leading-[28.8px] my-[8px]">
                Quick Links
              </h3>
              <ul>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div className="w-[125px]">
              <h3 className="text-white font-semibold text-[18px] leading-[28.8px] my-[8px]">
                Information
              </h3>
              <ul>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    T&C
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-[6px]">
                  <Link
                    className="text-white text-[14px] leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Payment Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="border-t border-white pt-8">
            <p className="text-white text-center text-[12px] leading-[14.4px]">
              © Copyright 2009-{new Date().getFullYear()}. Royal Arabian
              Destination Management DMCC. Dubai, United Arab Emirates. ® All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden px-3 pt-6 pb-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="h-[32px] relative w-[150px]">
              <Image
                alt="Royal Arabian"
                src="/logo_footer.svg"
                fill
                sizes="150px"
                className="brightness-0 invert object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-semibold text-base leading-6">
                Dubai Head Office :
              </h3>
              <p className="text-white text-[13px] leading-[17.55px]">
                Royal Arabian Destination Management DMCC <br />
                2102, Jumeirah Bay X3, Plot No: JLT-PH2-X3A, <br />
                Jumeirah Lake Tower, 117689, <br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-semibold text-base leading-6">
                Abu Dhabi Office :
              </h3>
              <p className="text-white text-[13px] leading-[17.55px]">
                Royal Arabian Tours LLC <br />
                Rashid Saif Jabr Alsuweidi Building 2, <br />
                Musaffah M39, Office Number 2, <br />
                Abu Dhabi, United Arab Emirates <br />
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-semibold text-base leading-6">
                Shanghai Office :
              </h3>
              <p className="text-white text-[13px] leading-[17.55px]">
                Room 7025, Zhongyi Building, <br />
                No. 580 West Nanjing Road, <br />
                Jingan District, <br />
                Shanghai, China. <br />
              </p>
            </div>

            {/* Social Channels (Mobile) */}
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Facebook"
                href="https://www.facebook.com/royalarabiandmc"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icon</title>
                  <path
                    d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Instagram"
                href="https://www.instagram.com/royalarabiandmc/"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icon</title>
                  <path
                    d="M9 0C6.556 0 6.25 0.01 5.289 0.054C4.33 0.098 3.677 0.25 3.105 0.473C2.513 0.702 2.011 1.009 1.511 1.511C1.009 2.011 0.702 2.513 0.473 3.105C0.25 3.677 0.098 4.33 0.054 5.289C0.01 6.25 0 6.556 0 9C0 11.444 0.01 11.75 0.054 12.711C0.098 13.67 0.25 14.323 0.473 14.895C0.702 15.487 1.009 15.989 1.511 16.489C2.011 16.991 2.513 17.298 3.105 17.527C3.677 17.75 4.33 17.902 5.289 17.946C6.25 17.99 6.556 18 9 18C11.444 18 11.75 17.99 12.711 17.946C13.67 17.902 14.323 17.75 14.895 17.527C15.487 17.298 15.989 16.489 16.489 16.489C16.991 15.989 17.298 15.487 17.527 14.895C17.75 14.323 17.902 13.67 17.946 12.711C17.99 11.75 18 11.444 18 9C18 6.556 17.99 6.25 17.946 5.289C17.902 4.33 17.75 3.677 17.527 3.105C17.298 2.513 16.991 2.011 16.489 1.511C15.989 1.009 15.487 0.702 14.895 0.473C14.323 0.25 13.67 0.098 12.711 0.054C11.75 0.01 11.444 0 9 0ZM9 1.622C11.403 1.622 11.688 1.631 12.637 1.675C13.514 1.715 13.991 1.862 14.308 1.984C14.728 2.146 15.028 2.342 15.343 2.657C15.658 2.972 15.854 3.272 16.016 3.692C16.138 4.009 16.285 4.486 16.325 5.363C16.369 6.312 16.378 6.597 16.378 9C16.378 11.403 16.369 11.688 16.325 12.637C16.285 13.514 16.138 13.991 16.016 14.308C15.854 14.728 15.658 15.028 15.343 15.343C15.028 15.658 14.728 15.854 14.308 16.016C13.991 16.138 13.514 16.285 12.637 16.325C11.688 16.369 11.403 16.378 9 16.378C6.597 16.378 6.312 16.369 5.363 16.325C4.486 16.285 4.009 16.138 3.692 16.016C3.272 15.854 2.972 15.658 2.657 15.343C2.342 15.028 2.146 14.728 1.984 14.308C1.862 13.991 1.715 13.514 1.675 12.637C1.631 11.688 1.622 11.403 1.622 9C1.622 6.597 1.631 6.312 1.675 5.363C1.715 4.486 1.862 4.009 1.984 3.692C2.146 3.272 2.342 2.972 2.657 2.657C2.972 2.342 3.272 2.146 3.692 1.984C4.009 1.862 4.486 1.715 5.363 1.675C6.312 1.631 6.597 1.622 9 1.622Z"
                    fill="white"
                  />
                  <path
                    d="M9 4.378C6.478 4.378 4.378 6.478 4.378 9C4.378 11.522 6.478 13.622 9 13.622C11.522 13.622 13.622 11.522 13.622 9C13.622 6.478 11.522 4.378 9 4.378ZM9 12C7.372 12 6 10.628 6 9C6 7.372 7.372 6 9 6C10.628 6 12 7.372 12 9C12 10.628 10.628 12 9 12Z"
                    fill="white"
                  />
                  <path
                    d="M14.884 4.195C14.884 4.794 14.401 5.277 13.802 5.277C13.203 5.277 12.72 4.794 12.72 4.195C12.72 3.596 13.203 3.113 13.802 3.113C14.401 3.113 14.884 3.596 14.884 4.195Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="X"
                href="https://twitter.com/RoyalArabianDMC"
              >
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icon</title>
                  <path
                    d="M14.1433 0H16.9194L10.8949 6.78954L18 16H12.4456L8.09489 10.4121L3.11694 16H0.339273L6.79644 8.72383L0 0H5.69544L9.61356 5.09537L14.1433 0ZM13.1803 14.3754H14.7095L4.88222 1.51464H3.24156L13.1803 14.3754Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/royalarabiandmc/"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icon</title>
                  <path
                    d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V6.75H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V11.19C12.6 10.17 12.58 8.87 11.19 8.87C9.78 8.87 9.57 9.96 9.57 11.13V15.3H6.87V6.75H9.45V8.01H9.49C9.84 7.35 10.71 6.65 12 6.65C14.73 6.65 15.3 8.47 15.3 10.83V15.3Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Youtube"
                href="https://www.youtube.com/channel/UCnrMygEtFzN47ORUxHVdfIw"
              >
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icon</title>
                  <path
                    d="M17.1562 2.03125C16.9531 1.25 16.3438 0.640625 15.5625 0.4375C14.2031 0.0625 8.99062 0.0625 8.99062 0.0625C8.99062 0.0625 3.77812 0.0625 2.41875 0.4375C1.6375 0.640625 1.02812 1.25 0.825 2.03125C0.45 3.39062 0.45 6.25 0.45 6.25C0.45 6.25 0.45 9.10937 0.825 10.4688C1.02812 11.25 1.6375 11.8594 2.41875 12.0625C3.77812 12.4375 8.99062 12.4375 8.99062 12.4375C8.99062 12.4375 14.2031 12.4375 15.5625 12.0625C16.3438 11.8594 16.9531 11.25 17.1562 10.4688C17.5312 9.10937 17.5312 6.25 17.5312 6.25C17.5312 6.25 17.5312 3.39062 17.1562 2.03125ZM7.26562 8.84375V3.65625L11.6719 6.25L7.26562 8.84375Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="text-white font-semibold text-base leading-6 py-2">
                Quick Links
              </h3>
              <ul className="flex flex-col">
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-semibold text-base leading-6 py-2">
                Information
              </h3>
              <ul className="flex flex-col">
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    T&C
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="text-white text-sm leading-[18.9px] hover:opacity-70 transition-opacity"
                    href="#"
                  >
                    Payment Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20">
            <p className="text-white text-xs leading-[14.4px]">
              © Copyright 2009-{new Date().getFullYear()}. Royal Arabian
              Destination Management DMCC. Dubai, United Arab Emirates. ® All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
