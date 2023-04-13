import React from "react";
import logo from "../assets/logo.png";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";
import ContactDetail from "./ContactDetail";
import CopyWrite from "./CopyWrite";
import GoToTop from "./GoToTop";

const Footer = () => {
  return (
    <>
      <div className="bg-black lg:px:32 xl:px-52 md:px-14 px-5 py-16 text-white">
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
              <FooterLink section="Mission" />
              <FooterLink section="Our Team " />
              <FooterLink section="Partners" />
              <FooterLink section="Testinoial" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Contacts</h2>

            <ul className="text-lg">
              <ContactDetail
                className="fa-solid fa-phone"
                contact="(+220) 4555677"
              />
              <hr />
              <ContactDetail
                className="fa-regular fa-envelope"
                contact="info@renex.org"
              />
              <hr />
              <ContactDetail
                className="fa-regular fa-clock"
                contact="Mon - Sat: 9:00 - 17:00"
              />

              <hr />
              <ContactDetail
                className="fa-solid fa-location-dot"
                contact="No. 14 Kairaba Avenue"
              />
              <hr />
            </ul>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Follow us</h2>
            <SocialLink
              domain="twitter.com"
              iconName="fa-twitter"
              iconColor="text-blue-400"
              name="Twitter"
            />
            <SocialLink
              domain="facebook.com"
              iconName="fa-facebook-f"
              iconColor="text-blue-500"
              name="Facebook"
            />
            <SocialLink
              domain="linkedIn.com"
              iconName="fa-linkedin-in"
              iconColor="text-blue-500"
              name="LinkedIn"
            />
            <SocialLink
              domain="instagram.com"
              iconName="fa-instagram"
              iconColor="text-red-200"
              name="Instagram"
            />
          </div>
        </div>
        <CopyWrite />
      </div>
      <GoToTop />
    </>
  );
};

export default Footer;
