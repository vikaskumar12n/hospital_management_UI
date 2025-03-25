import Image from "next/image";

export default function Carousel() {
    return (
        <section className="testimonials-section">
            <div className="container text-center">
                <h2 className="section-title">We served over <span className="highlight">5000+</span> Patients</h2>
                <p className="section-description">
                    Lets know more! Necessitatibus dolor asperiores illum possimus sint voluptates incidunt 
                    molestias nostrum laudantium. Maiores porro cumque quaerat.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {/* Testimonial 1 */}
                    <div className="col-md-6">
                        <div className="testimonial-box">
                            <div className="testimonial-header">
                                <Image src="/images/images/team/test-thumb1.jpg" alt="Doctor" width={50} height={50} className="testimonial-img" />
                                <div>
                                    <h5 className="testimonial-title">Good Support!</h5>
                                    <p className="testimonial-author">Kolis Mullar</p>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                They provide great service facility consectetur adipisicing elit. 
                                Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                            </p>
                            <span className="quote-icon">❝</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="col-md-6">
                        <div className="testimonial-box">
                            <div className="testimonial-header">
                                <Image src="/images/images/team/test-thumb4.jpg" alt="Doctor" width={50} height={50} className="testimonial-img" />
                                <div>
                                    <h5 className="testimonial-title">Nice Environment!</h5>
                                    <p className="testimonial-author">Partho Sarothi</p>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                They provide great service facility consectetur adipisicing elit. 
                                Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                            </p>
                            <span className="quote-icon">❝</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
