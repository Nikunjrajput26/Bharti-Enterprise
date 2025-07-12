import React from "react";
import "./Footer.css"; // Create this CSS file for styles

const Footer = () => (
	<footer className="footer">
		<section className="footer-main">
			<div className="container">
				<div className="footer-row">
					<div className="footer-col">
						<div className="footer-section1">
							<h5 className="footer-title">Contact Info</h5>
							<div className="footer-address">
								<h6 className="footer-subtitle">Office Address</h6>
								<p>
									Plot No. 52-53, Soma Kanji ni wadi, Udhna-Citylight BRTS Canal Road, Near Savera Complex, Khatodara, Surat-395002, Gujarat India.
								</p>
							</div>
							<div className="footer-address">
								<h6 className="footer-subtitle">Warehouse Address</h6>
								<p>
									Plot no 195, Ichhapore GIDC, Bhatpore, Limla, Surat-394510, Gujarat India.
								</p>
							</div>
							<div className="footer-phone">
								<h6 className="footer-subtitle">Phone</h6>
								<p>+91&nbsp;92279&nbsp;15114</p>
								<p>+91&nbsp;0261-2704000</p>
							</div>
							<div className="footer-email">
								<h6 className="footer-subtitle">Email</h6>
								<p>sales@tirupatisales.com</p>
							</div>
							<div className="footer-working-days">
								<h6 className="footer-subtitle">WORKING DAYS</h6>
								<p>Mon - Sat / 08:45 AM - 06:30 PM</p>
								<span className="footer-timezone">Indian Standard Time (IST)</span>
							</div>
						</div>
					</div>
					<div className="footer-col">
						<div className="footer-section2">
							<h5 className="footer-title">Categories</h5>
							<div className="footer-categories">
								<a href="https://www.tirupatisales.com/categories/cable">Cable</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/Prof.Lighting">Prof.Lighting</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/flp-product">FLP Product</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/lt-switchgear">LT Switchgear</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/industrial-fan">Industrial Fan</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/led-driver">LED Driver</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/switch-accessories">Switch &amp; Accessories</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/lt-panel">LT Panel</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/earthing">Earthing</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/domestic-fan">Domestic Fan</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/lugs--glands">LUGS &amp; GLANDS</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/cable-tie">CABLE TIE</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/cable-tray">Cable Tray</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/motors">MOTORS</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/conduit-pipes---metal-rcom-gi">CONDUIT PIPES / METAL RCOM GI</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/testng-instruments">TESTNG INSTRUMENTS</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/architecture-light">ARCHITECTURE LIGHT</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/general-maintanace-electrical-products">GENERAL MAINTANACE ELECTRICAL PRODUCTS</a>,{" "}
								<a href="https://www.tirupatisales.com/categories/elv">ELV</a>
							</div>
						</div>
					</div>
					<div className="footer-col">
						<div className="footer-section2">
							<h5 className="footer-title">Quick Links</h5>
							<ul className="footer-links">
								<li>
									<a href="https://www.tirupatisales.com/contact">Contact</a>
								</li>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">Terms &amp; Conditions</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">Sitemap</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-col">
						<div className="footer-section3">
							<h5 className="footer-title">Follow Us</h5>
							<div className="footer-social">
								<a className="mysocial" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TirupatiSalesCorporation/">
									<i className="bx bxl-facebook"></i>
								</a>
								<a className="mysocial" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tirupati_sales/">
									<i className="bx bxl-instagram"></i>
								</a>
								<a className="mysocial" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/79728230/admin/feed/posts/">
									<i className="bx bxl-linkedin"></i>
								</a>
								<a className="mysocial" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919227915114">
									<i className="bx bxl-whatsapp"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* end row */}
			</div>
		</section>
		<section className="footer-strip">
			<div className="container">
				<div className="footer-strip-row">
					<p className="footer-copyright">
						Copyright © Tirupati Sales Corporation 2025. All right reserved.
					</p>
					<div className="payment-icon">{/* Add payment icons if needed */}</div>
				</div>
			</div>
		</section>
	</footer>
);

export default Footer;