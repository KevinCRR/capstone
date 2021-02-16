import React, { Component } from "react";
 
class Search extends Component {
  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                  <form action="/" method="get">
                    <input type="checkbox" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label><br />
                    <input type="checkbox" name="vehicle2" value="Car" />
                    <label for="vehicle2"> I have a car</label><br />
                    <input type="checkbox" name="vehicle3" value="Boat" checked />
                    <label for="vehicle3"> I have a boat</label><br /><br />
                    <input type="submit" value="Submit" />
                  </form>


                  <div className="mb-11">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Job Type</h4>
                    <ul className="list-unstyled filter-check-list">
                      <li className="mb-2">
                        <span className="toggle-item">Full Time</span>
                      </li>
                      <li className="mb-2">
                        <span className="toggle-item">Part Time</span>
                      </li>
                      <li className="mb-2">
                        <span className="toggle-item">Contract</span>
                      </li>
                      <li className="mb-2">
                        <span className="toggle-item">Internship</span>
                      </li>
                      <li className="mb-2">
                        <span className="toggle-item">Temporary</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widgets mb-11 ">
                    <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Salary Range</h4>
                    </div>
                      <div className="widgets mb-11">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Experience Level</h4>
                        <ul className="list-unstyled filter-check-list">
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">All</span>
                          </li>
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Senior</span>
                          </li>
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Mid</span>
                          </li>
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Junior</span>
                          </li>
                        </ul>
                      </div>
                      <div className="widgets mb-11">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Posted Time</h4>
                        <ul className="list-unstyled filter-check-list">
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Anytime</span>
                          </li>
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Last day</span>
                          </li>
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Last 3 days</span>
                          </li>
                          <li className="mb-2">
                            <span className="Sidebar__CheckStyled-sc-1comsi8-0 lavqzE toggle-item ">Last week</span>
                          </li>
                        </ul>
                      </div>
                    </div>


                <div className="col-12 col-xl-8 col-lg-8">
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
                  <div className="pt-12">
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <h5 className="font-size-4 font-weight-normal text-gray">
                        <span className="heading-default-color">120</span>
                        results for 
                        <span className="heading-default-color">UI Designer</span>
                      </h5>
                      <div className="d-flex align-items-center result-view-type">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active" href="/search-list">
                          <i className="fa fa-list-ul"></i>
                        </a>
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray" href="/search-grid">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="media align-items-center">
                              <div className="square-72 d-block mr-8">
                              <img src="#" alt="" />
                            </div>
                            <div>
                              <h3 className="mb-0">
                                <a className="font-size-6 heading-default-color" href="/#">Product Designer</a>
                              </h3>
                              <a className="font-size-3 text-default-color line-height-2" href="/#">AirBnb</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src="#" alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">80-90K</span>
                               PLN
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row pt-8">
                          <div className="col-md-7">
                            <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                              <li>
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2" href="/#">Agile</a>
                              </li>
                              <li>
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2" href="/#">Wireframing</a>
                              </li>
                              <li>
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2" href="/#">Prototyping</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5">
                            <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                <span className="search-list___StyledSpan-sc-2h36jh-0 fHSKVx mr-4">
                                  <img src="#" alt="" />
                                </span>
                                <span className="font-weight-semibold">Berlyn, UK</span>
                              </li>
                              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                <span className="search-list___StyledSpan2-sc-2h36jh-1 dCffBe mr-4">
                                  <img src="#" alt="" />
                                </span>
                                <span className="font-weight-semibold">Full-time</span>
                              </li>
                              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                <span className="search-list___StyledSpan3-sc-2h36jh-2 grgUno mr-4">
                                  <img src="#" alt="" />
                                </span>
                                <span className="font-weight-semibold">9d ago</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pt-5 pt-lg-13">
                      <a className="text-green font-weight-bold text-uppercase font-size-3" href="/#">
                        Load More 
                        <i className="fas fa-sort-down ml-3"></i>
                      </a>
                    </div>
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