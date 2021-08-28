import fb from "../Images/fb.svg"
import insta from "../Images/insta.svg"
import linkedin from "../Images/linkedin.svg"
const Footer = () => {
  return (
    <footer className="text-center sticky-bottom">
      <section className="d-flex justify-content-center justify-content-lg-between">
        <div className="mx-auto">
          <h3 style={{ display: "inline-block", padding: "1rem", color: "white" }}>Follow Us: </h3>
          <a href="https://m.facebook.com/100042423789776/" style={{ textDecoration: "none" }}><img src={fb} className="img-fluid pb-2" alt="fb" style={{ cursor: "pointer" }}></img></a>
          <a href="https://www.linkedin.com/in/bhawak-anand-761649190/" style={{ textDecoration: "none" }}><img src={linkedin} className="img-fluid pb-2 mr-1" alt="linkedin" style={{ cursor: "pointer" }} /> </a>
          <a href="https://www.instagram.com/nikhithaa_reddy_/" style={{ textDecoration: "none" }}> <img src={insta} className="img-fluid pb-2 mx-3" alt="insta" style={{ cursor: "pointer" }}></img></a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;