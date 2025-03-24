import Image from 'next/image';


export default function PersonalCare() {
    return (
        <section className="care-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side: Images */}
                    <div className="col-lg-6 d-flex flex-column gap-3">
                        <div className="d-flex gap-3">
                            <Image src="/images/images/about/img-1.jpg" alt="Smiling patient" width={250} height={200}  />
                            <Image src="/images/images/about/img-3.jpg" alt="Doctors discussing" width={200} height={200} />
                            
                        </div>
                        <div className="d-flex gap-3">
                        <Image src="/images/images/about/img-2.jpg" alt="Medical team" width={250} height={200}  />
                        <Image src="/images/images/about/img-1.jpg" alt="Smiling patient" width={200} height={200}  />
                            
                        </div>
                       

                    </div>

                    {/* Right Side: Text Content */}
                    <div className="col-lg-6 text-lg-start text-center">
                        <h2 className="care-heading">Personal Care & Healthy Living</h2>
                        <p className="care-text">
                            We provide best leading medical service. Nulla perferendis veniam
                            deleniti ipsum officia dolores repellat laudantium obcaecati neque.
                        </p>
                        <a href="#" className="btn btn-danger btn-lg">SERVICES →</a>
                    </div>
                </div>
            </div>

            {/* Scroll-Up Button */}
            <a href="#" className={`scroll-up btn btn-danger`}>↑</a>
        </section>
    );
}
