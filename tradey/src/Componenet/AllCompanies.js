import { Link } from "react-router-dom";

const AllCompanies = (props) => {
  const { id, title } = props.info;
  return (
    <Link to={`/dataRequest/${id}`} style={{ textDecoration: "none" }}>
      <div className="col my-2">
        <div class="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AllCompanies;