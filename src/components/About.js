function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Hello! I'm Marvin.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">I'm a passionate Computer Science student at Nemsu Lianga College. Here, you'll find a fusion of my creative endeavors and insights into the world of technology. Join me as I navigate the future one key at a time.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                
            </div>
        </section>
  )
}

export default About