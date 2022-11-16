import React from 'react'

export default function Subscribe() {
    return (
        <div>
            <section className='subscribe-pg'>
                <div className='container'>
                    <div className='membership'>
                        <form>
                            <div className='membership-part'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <h3>Basic Info</h3>
                                </div>
                                <div className='col-md-8'>

                                    <div className='basic-info'>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">First Name*</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Last Name*</label>
                                                <input type="password" class="form-control" id="inputPassword4" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Email*</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress2">Password*</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <hr></hr>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <h3>Professional Info</h3>
                                </div>
                                <div className='col-md-8'>

                                    <div className='basic-info'>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Company*</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Job Title*</label>
                                                <input type="password" class="form-control" id="inputPassword4" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">LinkedIn</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">
                                                    Website</label>
                                                <input type="password" class="form-control" id="inputPassword4" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <hr></hr>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <h3>Personal Info</h3>
                                </div>
                                <div className='col-md-8'>

                                    <div className='basic-info'>
                                        <div class="form-group">
                                            <label for="inputAddress">Address 1*</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Address 2</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">City*</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">State</label>
                                                <input type="password" class="form-control" id="inputPassword4" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Zip Code*</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Phone*</label>
                                                <input type="password" class="form-control" id="inputPassword4" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Mobile</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">Fax</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <hr></hr>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        I Agree To Terms of Service & Privacy Policy.
                                    </label>
                                </div>
                            </div>
                            </div>
                            <button className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
