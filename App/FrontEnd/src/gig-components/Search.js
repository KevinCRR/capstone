import React, { Component } from "react";

import SearchFilters from "./SearchFilters";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
 
class Search extends Component {
  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row">
              <div className="col-4 col-lg-4 col-md-4 col-xs-12">
                  
                <SearchFilters />

              </div>
              <div className="col-8 col-lg-8 col-md-8 col-xs-12">
                <div className="row">
                  <SearchForm />
                </div>
                <div className="row">
                  <SearchResult />
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