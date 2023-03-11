import React from "react";
import FooterCols from "./FooterCols";
import logo from "../assets/logo.jpeg";
import { Link } from "react-scroll";
import FooterLink from "./FooterLink";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="bg-black lg:px-52 md:px-14 px-5 py-16 text-white">
        <div className="md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-10 w-full">
          <div className=" p-4 text-center md:text-start">
            <div className="lg:w-[250px] md-w-[80px] h-[150px] mx-auto md:mx-0">
              <img
                src={logo}
                alt=""
                srcSet=""
                className="w-full h-full object-contain"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              suscipit doloribus porro voluptatem similique ullam magnam alias!
              Sequi.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Navigations</h2>
            <div>
              <FooterLink section="Home" />
              <FooterLink section="Features" />
              <FooterLink section="Process" />
              <FooterLink section="Services" />
              <FooterLink section="Partners" />
              <FooterLink section="Testinoial" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Contacts</h2>

            <ul className="text-lg">
              <li className="py-1">
                <i className="fa-solid fa-phone py-3 pr-5 md:pr-3 lg:pr-5"></i>
                <span className="py-3">(220) 4555677</span>
              </li>
              <hr />
              <li className="py-1">
                <i className="fa-regular fa-envelope py-3 pr-5 md:pr-3 lg:pr-5 "></i>
                <span className="py-3">info@renex.org</span>
              </li>
              <hr />
              <li className="py-1">
                <i className="fa-regular fa-clock py-3 pr-5 md:pr-3 lg:pr-5"></i>
                <span className="py-3">Mon - Sat: 9:00 - 17:00</span>
              </li>
              <hr />
              <li className="py-1">
                <i className="fa-solid fa-location-dot py-3 pr-5 md:pr-3 lg:pr-5"></i>
                <span className="py-3">No. 14 Kairaba Avenue</span>
              </li>
              <hr />
            </ul>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Follow us</h2>
            <div className="">
              <div className="py-3">
                <a href="http://">
                  <i class="fa-brands fa-twitter fa-1x lg:fa-2x text-blue-600 mr-4"></i>
                  <span>Twitter</span>
                </a>
              </div>
              <div className="py-3">
                <a href="http://">
                  <i class="fa-brands fa-facebook-f fa-1x lg:fa-2x mr-4"></i>
                  <span>Facebook</span>
                </a>
              </div>
              <div className="py-3">
                <a href="http://">
                  <i class="fa-brands fa-youtube fa-1x lg:fa-2x text-red-400 mr-4"></i>
                  <span>YouTube</span>
                </a>
              </div>
              <div className="py-3">
                <a href="http://">
                  <i class="fa-brands fa-instagram fa-1x lg:fa-2x text-pink-200 mr-4"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-300 pt-14 text-sm lg:text-base">
          &copy; {date} RenEx Financial Services
        </p>
      </div>
    </>
  );
};

export default Footer;
