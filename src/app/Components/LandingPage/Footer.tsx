import Image from "next/image";
import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container text-center text-md-start">
                <div className="row">
                    {/* Logo & About */}
                    <div className="col-md-4">
                        <div className="footer-logo">
                            <Image src="/images/images/logo.png" alt="Novena Logo" width={150} height={50} />
                        </div>
                        <p className="footer-description">
                            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos
                            obcaecati tenetur veritatis eveniet distinctio possimus.
                        </p>
                        <div className="social-icons">
                            {/* <Link href="#"><FaFacebookF /></Link>
                            <Link href="#"><FaTwitter /></Link>
                            <Link href="#"><FaLinkedinIn /></Link> */}
                        </div>
                    </div>

                    {/* Departments */}
                    <div className="col-md-2">
                        <h5 className="footer-title">Department</h5>
                        <ul className="footer-links">
                            <li><Link href="#">Surgery</Link></li>
                            <li><Link href="#">Women's Health</Link></li>
                            <li><Link href="#">Radiology</Link></li>
                            <li><Link href="#">Cardioc</Link></li>
                            <li><Link href="#">Medicine</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-md-2">
                        <h5 className="footer-title">Support</h5>
                        <ul className="footer-links">
                            <li><Link href="#">Terms & Conditions</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Company Support</Link></li>
                            <li><Link href="#">FAQ Questions</Link></li>
                            <li><Link href="#">Company Licence</Link></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="col-md-4">
                        <h5 className="footer-title">Get In Touch</h5>
                        <p className="footer-contact">
                            📧 Support Available for 24/7 <br />
                            <strong>Support@email.com</strong>
                        </p>
                        <p className="footer-contact">
                            🕒 Mon to Fri : 08:30 - 18:00 <br />
                            📞 <strong>+23-456-6588</strong>
                        </p>
                    </div>
                </div>

                {/* Copyright & Subscription */}
                <div className="footer-bottom text-center">
                    <p>
                        &copy; Copyright Reserved to <strong>Novena</strong> by <strong>Themefisher</strong>
                    </p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Your Email address" />
                        <button>SUBSCRIBE</button>
                    </div>
                    <p>Distributed by <strong>Themewagon</strong></p>
                </div>
            </div>
        </footer>
    );
}
