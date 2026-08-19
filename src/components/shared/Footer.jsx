import Link from 'next/link';
import { CiTimer } from 'react-icons/ci';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaRegAddressCard, FaPhone } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            PX-<span className="text-[#d81b99]">Tile</span>
                        </h2>
                        <p className="text-sm leading-relaxed mb-4">
                            Complete Your Desires With Us. Discover premium quality tiles for every space.
                        </p>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                <FaPinterest size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className=''>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 ">
                            <li>
                                <Link href="/tiles" className="hover:text-[#d81b99] transition-colors">
                                    All Tiles
                                </Link>
                            </li>
                            <li>
                                <Link href="/tiles?category=marble" className="hover:text-[#d81b99] transition-colors">
                                    Marble Tiles
                                </Link>
                            </li>
                            <li>
                                <Link href="/tiles?category=terracotta" className="hover:text-[#d81b99] transition-colors">
                                    Terracotta Tiles
                                </Link>
                            </li>
                            <li>
                                <Link href="/tiles?category=porcelain" className="hover:text-[#d81b99] transition-colors">
                                    Porcelain Tiles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-[#d81b99] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#d81b99] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-[#d81b99] transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-[#d81b99] transition-colors">
                                    Shipping Info
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
                        <ul className="space-y-3 ">
                            <li className="flex justify-center gap-3">
                                <FaRegAddressCard />
                                <span className="text-sm">123 Tile Street, Design City, DC 10001</span>
                            </li>
                            <li className="flex justify-center gap-3">
                                <FaPhone />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex justify-center gap-3">
                                <MdInfoOutline />
                                <span className="text-sm">info@tilehub.com</span>
                            </li>
                            <li className="flex justify-center gap-3">
                                <CiTimer />
                                <span className="text-sm">Mon-Fri: 9AM - 6PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} TileHub. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-2 sm:mt-0">
                            <Link href="/privacy" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-[#d81b99] transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;