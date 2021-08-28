import fb from "../Images/fb.svg"
import insta from "../Images/insta.svg"
import twitter from "../Images/twitter.svg"

const Footer = () => {
  return (
    <footer className="text-center">
      <section className="d-flex justify-content-center justify-content-lg-between">
        <div className="mx-auto">
          <h3 style={{ display: "inline-block", padding: "1rem", color: "white" }}>Follow Us: </h3>
          <img src={fb} className="img-fluid pb-2" alt="fb"></img>
          <img src={twitter} className="img-fluid pb-2" alt="twitter"></img>
          <img src={insta} className="img-fluid pb-2" alt="insta"></img>
        </div>
      </section>
    </footer>
  )
}

export default Footer;