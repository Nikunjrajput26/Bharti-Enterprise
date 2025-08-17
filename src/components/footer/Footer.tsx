import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import bharatiLogo from "../../assets/bharati_logo.jpg";

export function Footer() {
  return (
    <footer
      className="bg-[#f0ecf4]  rounded-t-4xl mt-14"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <img src={bharatiLogo} alt="Bharati Logo" className="w-[150px]" />
        </div>

        <div>
          <h3
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            className="text-lg font-semibold text-[#E41C23] mb-3"
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#E41C23]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#E41C23]">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#E41C23]">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#E41C23]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            className="text-lg font-semibold text-[#E41C23] mb-3"
          >
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-[#E41C23]">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-[#E41C23]">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[#E41C23]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#E41C23]">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            className="text-lg font-semibold text-[#E41C23] mb-3"
          >
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#E41C23]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#E41C23]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#E41C23]">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-[#E41C23]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Bharati Enterprise. All rights reserved.
      </div>
    </footer>
  );
}
