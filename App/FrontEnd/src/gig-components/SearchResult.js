import React, { Component } from "react";



class SearchResult extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

export default SearchResult;