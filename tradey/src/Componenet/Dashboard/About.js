import aboutus from "../Images/AboutUs.jpg"

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row p-3">
        <h2 className="text-center my-1">About</h2>
        <div className="btn about-style btn-sm "></div>
      </div>
      <div className="row p-3">
        <div className="col-lg-6">
          <img src={aboutus} className="w-100 h-90 mx-auto img-fluid img-border rounded" alt="book"></img>
        </div>
        <div className="col-lg-6">
          <h2 className="text-center mt-4">Why Users Love Tradey</h2>
          <p className="text-center intro-font">
            Users can select the company from various companies present in our website and can see the stocks value and can check the prices.
            After selecting the Company Users should have ability to switch between OHLC, Colored
            Bar and Vertex Line.
            An OHLC chart shows the open, high, low, and close price for a given period it can be applied to any frame .
            The vertical line represents the high and low for the period, while the line to the left marks the open price and the line to the right marks the closing price. This entire
            structure is called a bar.
            <br />
            Technical traders use a variety of stock charts to analyze market data in order to pinpoint optimum entry and exit points for their trades. By setting up efficient charts and workspaces,
            you'll gain quick access to the data you need to make profitable trading decisions.
            In Our website users can see tha stocks variation for different compaines with different types of graphs they can choose to their comfort .
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;