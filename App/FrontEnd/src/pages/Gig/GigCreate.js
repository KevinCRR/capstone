import React, { Component } from "react";
 
class CreateGig extends Component {
  render() {
    return (
      <div>
        
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
              <div className="row justify-content-center mt-14">
                <div className="col-xxl-6 col-xl-7 col-lg-8">
                  <h2 className="font-size-9 text-center mb-11">Create Gig</h2>
                  <div className="border p-5 bg-white shadow-8 rounded">
                    <form name="contact" method="post">
                      <input type="hidden" name="form-name" value="contact" />
                        <div className="row">
                          <div className="col-12 mb-5">
                            <label for="name" className="font-size-4 font-weight-semibold text-black-2 mb-1 line-height-reset">Title</label>
                            <input type="text" className="form-control" placeholder="Jon Doe" id="name" name="name" required="" />
                          </div>
                        <div className="col-lg-6 mb-5">
                          <label for="email" className="font-size-4 font-weight-semibold text-black-2 mb-1 line-height-reset">Company Name</label>
                          <input type="text" className="form-control" placeholder="example@gmail.com" id="email" name="email" required="" />
                        </div>
                        <div className="col-lg-6 mb-5">
                          <label for="subject" className="font-size-4 font-weight-semibold text-black-2 mb-1 line-height-reset">Gig Description</label>
                          <input type="text" className="form-control" placeholder="Special contract" id="subject" name="subject" required="" />
                        </div>
                        <div className="col-lg-12 mb-5">
                          <label for="message" className="font-size-4 font-weight-semibold text-black-2 mb-1 line-height-reset">Skills</label>
                          <textarea id="message" placeholder="Type your message" className="form-control h-px-144" name="message" required=""></textarea>
                        </div>
                        <div className="col-lg-12 pt-4">
                          <button type="submit" className="btn btn-primary text-uppercase w-100 h-px-48">Publish</button>
                        </div>
                      </div>
                    </form>
                    
                  </div>
                </div>
              </div>
          </div>
        </section>

      </div>
    );
  }
}
 
export default CreateGig;