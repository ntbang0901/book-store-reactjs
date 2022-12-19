function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>our locations</h3>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> india
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> USA
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> russia
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> france
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> japan
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> africa
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            <i className="fas fa-arrow-right"></i> home
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> featured
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> arrivals
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> reviews
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> blogs
          </a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#">
            <i className="fas fa-arrow-right"></i> account info
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> ordered items
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> privacy policy
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> payment method
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> our serivces
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7890
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +111-222-3333
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> shaikhanas@gmail.com
          </a>
          <img src="image/worldmap.png" className="map" alt="" />
        </div>
      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-pinterest"></a>
      </div>

      <div className="credit">
        created by <span>mr. web designer</span> | all rights reserved!
      </div>
    </section>
  );
}

export default Footer;
