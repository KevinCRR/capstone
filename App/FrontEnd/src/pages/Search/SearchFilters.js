import React, { Component } from "react";



class SearchFilters extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default SearchFilters;