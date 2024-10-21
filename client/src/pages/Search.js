import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";

const Search = () => {
  const [values, setValues] = useSearch();
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter products based on the search query
  const filteredResults = values?.results.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control mb-3"
          />
          <h6>
            {filteredResults.length < 1
              ? "No Products Found"
              : `Found ${filteredResults.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {filteredResults.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> Rs.{p.price}</p>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button className="btn btn-secondary ms-1">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
