import React, { Component } from "react";



class SearchForm extends Component {
    render() {
        return (
            <div>
                        <form action="/" className="search-form">
                            <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                                <div className="filter-inputs row">
                                    <div className="form-group col-6">          
                                        <input type="text" className="form-control focus-reset pl-13" id="keyword" placeholder="Position Title" />
                                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                                        </span>
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control focus-reset pl-13" id="keyword" placeholder="Address" />
                                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="button-block">
                                    <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                                </div>
                            </div>
                        </form>
            </div>
        );
    }
}

export default SearchForm;