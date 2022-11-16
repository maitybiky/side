import React from 'react'
import ticket1 from "../../images/Mastercard Full.png";
import ticket2 from "../../images/Group 69370.png";
import ticket3 from "../../images/Paypal.png";
import ticket4 from "../../images/Pay.png";

export default function Eventsinnerform() {
  return (
    <div>
        <section className="Event_inner_from_page clearfix">
  <div className="container">
    <div className="Event__Buy_Ticket">
      <h6>Buy Ticket For Event</h6>
    </div>
    <div className="Event__Buy_Ticket_card">
      <div className="Event__inn_payment">
        <div className="d-flex  align-items-center">
          <h4>Payment </h4>
          <span />
        </div>
      </div>
      <div className="Payment_Method_top d-flex justify-content-between mb-2">
        <div className="Payment_Method_text">
          <h5>Payment Method</h5>
        </div>
        <div className="Payment_Method_img">
          <a href="#">
            <img src={ticket2} alt="visa" />
          </a>
          <a href="#">
            <img src={ticket1} alt="Mastercard" />
          </a>
          <a href="#">
            <img src={ticket3} alt="Paypal" />
          </a>
          <a href="#">
            <img src={ticket4} alt="Pay" />
          </a>
        </div>
      </div>
      <div className="Payment_Method_bottom">
        <form>
          <div className="form-group mb-4">
            <label htmlFor="formGroupExampleInput">Card Holder’s Name</label>
            <input type="text" className="form-control" id="" placeholder="" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="formGroupExampleInput2">Card Number</label>
            <input type="text" className="form-control" id="" placeholder="" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-auto col-12 mb-4">
              <label htmlFor="formGroupExampleInput3">Expire Date</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-auto col-12 mb-4">
              <label htmlFor="formGroupExampleInput4">CVC</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="Questions___experience">
        <div className="d-flex align-items-center robado mb-5">
          <h4>Questions for your better experience</h4>
          <span />
        </div>
        <div className="find_inthis_event1">
          <h3>
            <i className="fa fa-question-circle" aria-hidden="true" /> What do
            you want to find in this event?
          </h3>
          <form>
            <div className="form-group">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                  />
                  Marketing
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                  />
                  Marketing
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                  />
                  Yoga
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                  />
                  Yoga
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="find_inthis_event2">
          <h3>
            <i className="fa fa-question-circle" aria-hidden="true" /> What is
            your profession?
          </h3>
          <form>
            <div className="form-group col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <select id="" className="form-control">
                <option selected="">Choose an option</option>
                <option>Choose...</option>
                <option>Choose...</option>
              </select>
            </div>
          </form>
        </div>
        <div className="find_inthis_event3">
          <h3>
            <i className="fa fa-question-circle" aria-hidden="true" /> My
            immediate needs are:
          </h3>
          <form>
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                rows={2}
                id=""
                placeholder="Write your ans"
                defaultValue={""}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="Event__Buy_Confirm_btn">
        <a href="#">Confirm</a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
