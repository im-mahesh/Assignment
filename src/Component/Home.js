import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-12">
            <div className="card bg-secondary shadow ">
              <div className="card-header bg-transparent">
                <div className="row ">
                  <div className="col">
                    <h2 className="mb-1">Assignments Setup</h2>
                    <h6 className="text-uppercase text-muted ls-1 mb-0">Check for Assignments Setup</h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form _lpchecked={1}>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <label className="label-style">Select Programme</label>
                        <select className="form-control form-control-alternative ">
                          <option>Certificate Courses</option>
                          <option>CIB-Certificate in Business</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <label className="label-style">Course List</label>
                        <select className="form-control form-control-alternative ">
                          <option>CHRM - Certificate in Human Resourse Management</option>
                          <option>CIA - Certificate in Accounting</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <label className="label-style">Units List</label>
                        <select className="form-control form-control-alternative ">
                          <option>1003 - Certificate in Business</option>
                          <option>1002 - Business Communication</option>
                          <option>1012 - Business Accounting</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <label className="label-style">Rego Period</label>
                        <select className="form-control form-control-alternative ">
                          <option>Semester 1</option>
                          <option>Semester 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <label className="label-style">Year</label>
                      <input type="text" id name defaultValue={2015} className="form-control form-control-alternative" placeholder style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto' }} />
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <label className="label-style">Course</label>
                      <div className="mt-2">CIB</div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="label-style">Unit Code</label>
                      <div className="mt-2">1003 - Miscrosoft Office training</div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <label className="label-style">Exam Code</label>
                      <input type="text" id name className="form-control form-control-alternative" placeholder />
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <label className="label-style">Weight</label>
                      <input type="text" id name className="form-control form-control-alternative" placeholder />
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <label className="label-style">Total Marks</label>
                      <input type="text" id name className="form-control form-control-alternative" placeholder />
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="form-group">
                        <label className="label-style">Due Date</label>
                        <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" id="datepicker" name defaultValue className="form-control form-control-alternative" data-type="datepicker" data-guid="fe0e2bec-34b3-5de9-5d0f-9c4009a8e86c" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label className="label-style">Description</label>
                        <textarea type="text" id name className="form-control form-control-alternative" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center  mt-3 mb-4">
                    <div className="col-lg-12 text-center col-md-12 btn-style-bk">
                      <a href="#" className="btn  btn-primary">Add New</a>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-3">
                    <div className="table-responsive">
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">No:</th>
                            <th scope="col">Assignments</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Due Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-lg-3 col-md-8">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
