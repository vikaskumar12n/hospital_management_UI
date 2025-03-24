import Image from "next/image";

const partners = [
    { src: "/public/images/images/about/1.png", alt: "AAMC" },
    { src: "/images/images/about/2.png", alt: "Global Health Awards" },
    { src: "/images/images/about/3.png", alt: "Authentic Coffee" },
    { src: "/images/images/about/4.png", alt: "Retro Design" },
    { src: "/images/images/about/5.png", alt: "German Medical Award" },
    { src: "/images/images/about/6.png", alt: "Mochaccino" },
];

export default function Award() {
    return (
        <section className="partners-section">
            <div className="container text-center">
                <h2 className="section-title">Partners who support us</h2>
                <div className="title-underline"></div>
                <p className="section-description">
                    Lets know more! Necessitatibus dolor asperiores illum possimus sint voluptates incidunt 
                    molestias nostrum laudantium. Maiores porro cumque quaerat.
                </p>
            </div>

            <div className="container text-center">
                <div className="row justify-content-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="col-md-2 col-6">
                            <Image src={partner.src} alt={partner.alt} width={120} height={60} className="partner-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
