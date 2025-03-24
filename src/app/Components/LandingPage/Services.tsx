import Image from "next/image";

const services = [
    { icon: "/images/images/about/1.png", title: "Laboratory services" },
    { icon: "/icons/heart.png", title: "Heart Disease" },
    { icon: "/icons/dental.png", title: "Dental Care" },
    { icon: "/icons/surgery.png", title: "Body Surgery" },
    { icon: "/icons/neurology.png", title: "Neurology Surgery" },
    { icon: "/icons/gynecology.png", title: "Gynecology" }
];

export default function MedicalServices() {
    return (
    
        <section className="medical-services-section">
            <div className="container">
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4">
                            <div className="service-card">
                                <Image src={service.icon} alt={service.title} width={50} height={50} />
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
