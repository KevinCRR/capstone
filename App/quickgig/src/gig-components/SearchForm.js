import React, { Component } from "react";



class SearchForm extends Component {
    render() {
        return (
            <div>
                        <form action="/" className="search-form">
                            <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                                <div className="filter-inputs">
                                    <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">          
                                        <input type="text" className="form-control focus-reset pl-13" id="keyword" placeholder="UI Designer" />
                                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                                        </span>
                                    </div>
                                    <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                                        <div className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100 css-2b097c-container">
                                            <div className=" css-soaw7o-control">
                                                <div className=" css-1hwfws3">
                                                    <div className=" css-1uccc91-singleValue">Bangladesh</div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{display: 'inline-block'}}>
                                                        <input type="text" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-inId-input" spellcheck="false" tabindex="0" value="" aria-autocomplete="list" style={{boxSizing: 'content-box', width: '2px', background: '0px center', border: '0px', fontSize: 'inherit', opacity: '1', outline: '0px', padding: '0px', color: 'inherit'}} />
                                                        <div style={{position: 'absolute', top: '0px', left: '0px', visibility: 'hidden', height: '0px', overflow: 'scroll', whiteSpace: 'pre', fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: '400', fontStyle: 'normal', letterSpacing: 'normal', textTransform: 'none'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" css-1wy0on6">
                                                    <span className=" css-0"></span>
                                                    <div aria-hidden="true" className=" css-0">
                                                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-19bqh2r">
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" name="item" value="bd" />
                                        </div>
                                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                            <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
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