import React, { useState } from "react";

function Account() {
  const [state, setState] = useState({
    firstname: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <>
      <div className="container mt-5">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFName"
              name="firstname"
              value={state.firstname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="lastName"
              value={state.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              
              value="Male"
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              value="Femail"
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Femail
            </label>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address1"
              value={state.address1}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="address2"
              value={state.address2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={state.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="state"
              value={state.state}
              onChange={handleInputChange}
              required
            >
              <option selected>Select the State</option>
              <option value="Punjab">Punjab</option>
              <option value="KPK">KPK</option>
              <option value="Sindh">Sindh</option>
              <option value="Blochistan">Blochistan</option>
              <option value="Kashmir">Kashmir</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zipcode"
              value={state.zipcode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Are you agree to creat account
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Account;
