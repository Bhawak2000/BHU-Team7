import aboutus from "../Images/AboutUs.jpg"

const About = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row p-3">
        <h2 className="text-center my-1">About</h2>
        <div className="btn about-style btn-sm "></div>
      </div>
      <div className="row p-3">
        <div className="col-lg-6">
          <img src={aboutus} className="w-100 h-90 mx-auto img-fluid img-border rounded" alt="book"></img>
        </div>
        <div className="col-lg-6">
          <h2 className="text-center mt-3">Why Users Love Tradey</h2>
          <p className="text-center intro-font">
            In a world full of chaos, Wedley offers its vendors associated with various businesses of wedding industry a seamless platform to connect directly
            with customers. Hence, bridging the gap between vendors and customers at zero subscription cost.
            <br />
            We at Wedley believe our vendors should only pay us when they are fully satisfied by our service and any kind of
            subscription based approach for vendors contradict our work ethics.
            <br />
            Our platform offers a vendor to showcase its services in variety of ways, hence making a direct connection with
            the target audience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;