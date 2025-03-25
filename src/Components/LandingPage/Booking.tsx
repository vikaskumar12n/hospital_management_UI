import Image from "next/image";

export default function Booking() {
    return (
        <section className="book-appointment-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left: Doctor Image */}
                    <div className="col-md-6">
                        <div className="doctor-image">
                            <Image src="/images/images/about/img-3.jpg" alt="Doctors" width={500} height={300} className="img-fluid" />
                            <div className="contact-box">
                                <i className="fas fa-phone-alt"></i>
                                <span>+23 345 67980</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Appointment Form */}
                    <div className="col-md-6">
                        <h2 className="section-title">Book appointment</h2>
                        <p className="section-description">
                            Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit.
                        </p>

                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <select className="form-control">
                                        <option>Choose Department</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control">
                                        <option>Select Doctors</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <input type="date" className="form-control" placeholder="dd/mm/yyyy" />
                                </div>
                                <div className="col-md-6">
                                    <input type="time" className="form-control" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <textarea className="form-control" placeholder="Your Message"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary mt-3">MAKE APPOINTMENT</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
