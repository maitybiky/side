import React from 'react'
import create1 from "../../images/Group 68599.png";
import create2 from "../../images/Group 68510.png";
import create3 from "../../images/Group 68511.png";
import create4 from "../../images/Group 68509.png";
import create5 from "../../images/Group 68512.png";

export default function Eventcreate() {
  return (
    <div>
        <section className="create_meeting_page clearfix">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="create_meeting_head">
          <div className="d-flex align-items-center mb-3">
            <h4>Create Meeting</h4>
            <span />
          </div>
        </div>
      </div>
    </div>
    <div className="create_meeting_card">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <div className="Select_meeting_room">
            <h5>Select meeting room</h5>
            <div className="all_typesofmeeting d-flex justify-content-between">
              <div className="Board_Meeting">
                <div className="Board_Meeting_img">
                  <img src={create1} alt="img" />
                </div>
                <div className="Board_Meeting_name">
                  <h6>Board Meeting</h6>
                  <p>12 Seats</p>
                </div>
              </div>
              <div className="Board_Meeting">
                <div className="Board_Meeting_img">
                  <img src={create2} alt="img" />
                </div>
                <div className="Board_Meeting_name">
                  <h6>large Meeting</h6>
                  <p>Unlimited People</p>
                </div>
              </div>
              <div className="Board_Meeting">
                <div className="Board_Meeting_img">
                  <img src={create3} alt="img" />
                </div>
                <div className="Board_Meeting_name">
                  <h6>Comfy Room</h6>
                  <p>16 People</p>
                </div>
              </div>
              <div className="Board_Meeting">
                <div className="Board_Meeting_img">
                  <img src={create4} alt="img" />
                </div>
                <div className="Board_Meeting_name">
                  <h6>Master class</h6>
                  <p>22 People</p>
                </div>
              </div>
              <div className="Board_Meeting">
                <div className="Board_Meeting_img">
                  <img src={create5} alt="img" />
                </div>
                <div className="Board_Meeting_name">
                  <h6>YOga Room</h6>
                  <p>Unlimited People</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <div className="Meeting___details_head">
            <h5>Meeting details</h5>
            <div className="Meeting__details_topic">
              <form>
                <div className="form-group row mb-4">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Meeting Topic
                  </label>
                  <div className="col-sm-9">
                    <select id="inputState" className="form-control">
                      <option selected="">Enter meeting name</option>
                      <option>Choose...</option>
                      <option>Choose...</option>
                      <option>Choose...</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Set Time
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="starttime"
                      placeholder="Start Time"
                    />
                  </div>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="starttime"
                      placeholder="End Time"
                    />
                  </div>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="starttime"
                      placeholder="30 min"
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Time zone
                  </label>
                  <div className="col-sm-4">
                    <select id="inputState" className="form-control">
                      <option selected="">Dhaka (GMT+6)</option>
                      <option>Dhaka (GMT+5)</option>
                      <option>Dhaka (GMT+4)</option>
                      <option>Choose...</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Passcode
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control passcode"
                      id="inputpasscode"
                      placeholder="Enter passcode"
                    />
                    <div className="input-group-addon">
                      <a href="">
                        <i className="fa fa-eye-slash" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-lg-9 col-md-9 col-12">
          <div className="Create_Meeti__btn">
            <a href="#">Create Meeting</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
          <div className="Create_Cancel__btn">
            <a href="#">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
