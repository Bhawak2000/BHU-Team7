

const Companies = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">About</h2>
        <div className="btn about-style btn-sm "></div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 m-4">
        <div className="col">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">Amazon</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Facebook</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Apple</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Autodesk</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-3"><button className="deg_btn text-center">See More</button></div>
    </div>
  )

}

export default Companies;