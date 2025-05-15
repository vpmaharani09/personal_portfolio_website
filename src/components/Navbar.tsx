import { FloatingNav } from "./ui/FloatingNavbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experiences", link: "#experiences" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} className="md:px-10 px-5" />;
};

export default Navbar;
