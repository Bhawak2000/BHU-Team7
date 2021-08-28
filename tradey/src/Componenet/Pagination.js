import React from "react";
import ReactPaginate from 'react-paginate';
import AllCompanies from "./AllCompanies";


const url = "https://jsonplaceholder.typicode.com/posts";

class Pagination extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      displayData: [],
      orgtableData: [],
      perPage: 12,
      currentPage: 1
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });
    window.scrollTo(0, 0);

  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      displayData: slice
    })

  }

  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting data');
      })
      .then((data) => {
        console.log(data);
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: data,
          displayData: data.slice(this.state.offset, this.state.offset + this.state.perPage)
        })
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-4 m-4">
          {this.state.displayData.map((data, i) => <AllCompanies key={i} info={data} />)
          }
        </div>
        <ReactPaginate
          previousLabel={"<< Prev"}
          nextLabel={"Next >>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    )
  }
}

export default Pagination;