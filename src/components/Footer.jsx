import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <footer className="relative py-2 w-full mt-10 z-0 bg-[#000] text-white">
      <div className=" pr-20 pl-10  w-full  max-w-full lg:max-w-screen-lg xl:max-w-screen-2xl   ">
        <div className="flex flex-wrap margin ">
          <div className="margin-container">
            <div className="mb-5 ">
              <img
                className="w-1/2 mb-3 "
                src="https://www.banke.ae/wp-content/uploads/2021/07/Banke-White-Logo-1.png"
                alt=""
              />

              <div
                class="divider "
                data-id="427bf790"
                data-element_type="widget"
                data-widget_type="divider.default"
              >
                <div class="">
                  <div class="flex py-1">
                    <span class="flex w-full divider-separator"></span>
                  </div>
                </div>
              </div>
              <p className="text-xl font-semibold">Follow us</p>
              <ul className="mt-5">
                <li className="mb-2 mr-2 inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                  <a href="https://www.linkedin.com/in/muhammad-sohaib-khan-1b7108220/">
                    <span className="icon-linkedin">
                      <LinkedInIcon fontSize="large" />
                    </span>
                  </a>
                </li>
                <li className="mb-2 mr-2 inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                  <a href="https://www.facebook.com/profile.php?id=100080025653362">
                    <span className="icon-facebook">
                      <FacebookIcon fontSize="large" />
                    </span>
                  </a>
                </li>
                <li className="mb-2 mr-2 inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                  <a href="https://github.com/Hmmm-Code">
                    <span className="icon-github test ">
                      <GitHubIcon fontSize="large" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="margin-container">
            <div className=" mb-5 ml-2">
              <h2 className="text-xl font-semibold mb-7">Explore</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>
                    Residential
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>
                    Commercial
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Off-Plan
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="margin-container">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-7">Quick Links</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Contact
                    us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>
                    Consultants
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Privacy
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="margin-container">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-7">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li className="mb-2">
                    <span className="icon icon-map-marker">
                      <HomeIcon />
                    </span>
                    <span className="text">Sharjah UAE</span>
                  </li>
                  <li className="mb-2">
                    <a href="#">
                      <span className="icon icon-phone">
                        <ContactsIcon />
                      </span>
                      <span className="text">+971 58 2361 890</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#">
                      <span className="icon ">
                        <MailIcon />
                      </span>

                      <span className="text">skcbskcb0@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
