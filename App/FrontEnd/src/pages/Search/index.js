import React, { Component } from "react";

import SearchFilters from "./SearchFilters";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import PostsContainer from "../Gig/PostsContainer";
 
class Search extends Component {
  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row">
              {/* <div className="col-4 col-lg-4 col-md-4 col-xs-12">
                  
                <SearchFilters />

              </div> */}
              <div className="col-12 col-lg-12 col-md-12 col-xs-12">
                <div className="row mb-5">
                  <div className="col-12">
                    <SearchForm />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <PostsContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
 
export default Search;