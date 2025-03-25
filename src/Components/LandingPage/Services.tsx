import Image from "next/image";

const services = [
    { icon: "/images/images/services/Laboratory-services.jpg", title: "Laboratory services" },
    { icon: "/images/images/services/Heart-Disease.jpeg", title: "Heart Disease" },
    { icon: "/images/images/services/Dental-Care.webp", title: "Dental Care" },
    { icon: "/images/images/services/Body-Surgery.jpeg", title: "Body Surgery" },
    { icon: "/images/images/services/Neurology-Surgery.jpg", title: "Neurology Surgery" },
    { icon: "/images/images/services/Gynecology.jpg", title: "Gynecology" }
];

export default function MedicalServices() {
    return (
    
        <section className="medical-services-section">
            <div className="container">
                <div className="row g-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4">
                            <div className="service-card">
                                <Image src={service.icon} alt={service.title} width={150} height={70} style={{borderRadius:"5px"}} />
                                <h5>{service.title}</h5>
                                <p>Saepre nulla praesentium eaque omnis perferendis a doloremque.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
