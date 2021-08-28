import { Link } from "react-router-dom"

const Companies = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Companies</h2>
        <div className="btn about-style btn-sm "></div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 ">
        <div className="col my-2" onClick={console.log("hello")}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Amazon</h5>
            </div>
          </div>
        </div>
        <div className="col my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Facebook</h5>
            </div>
          </div>
        </div>
        <div className="col my-2">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Apple</h5>
            </div>
          </div>
        </div>
        <div className="col my-2">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Autodesk</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-3"><Link to="/companies" style={{ textDecoration: "none" }}><button className="deg_btn text-center">See More</button></Link></div>
    </div>
  )

}

export default Companies;