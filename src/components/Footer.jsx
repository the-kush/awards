import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-400 py-4 text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 px-4">
        <p className="text-center text-sm md:text-left">© 2023 Zentry. All rights reserved.</p>
        <div className="flex justify-center gap-4 md:justify-start">
            {socialLinks.map((link) => (
                <a  key={link} href="link.href" target="_blank" rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-yellow-300">{link.icon}</a>
            ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline hover:text-yellow-300 md:text-right">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer
