import React from 'react'

const UserForm = ({ data, handleChange, handleSubmit, errors }) => (
  <section className="formTemplate">
    <div className="userForm form-group">
      <h2 className="formHeading vinco">opeN accouNt</h2>
      <form className="centre"onSubmit={handleSubmit}>
        <div className="formBackground form-group">
          <label>Title</label>
          <input
            className={`form-input col-12 ${errors.title ? 'is-error' : ''}`}
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={data.title}
            onChange={handleChange}
          />
          {/* <p className="form-input-hint">{`${errors.title ? 'Title is required' : ''}`}</p> */}

          <label>First name</label>
          <input
            className={`form-input col-12 ${errors.first_name ? 'is-error' : ''}`}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First name"
            value={data.first_name}
            onChange={handleChange}
          />
          {/* <p className="form-input-hint">{`${errors.first_name ? 'First name is required' : ''}`}</p> */}

          <label>Surname</label>
          <input
            className={`form-input col-12 ${errors.last_name ? 'is-error' : ''}`}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Surname"
            value={data.last_name}
            onChange={handleChange}
          />
          {/* <p className="form-input-hint">{`${errors.last_name ? 'Surname is required' : ''}`}</p> */}

          <label>Username</label>
          <input
            className={`form-input col-12 ${errors.username ? 'is-error' : ''}`}
            type="text"
            id="username"
            name="username"
            placeholder="Choose your username"
            value={data.username}
            onChange={handleChange}
          />
          {/* <p className="form-input-hint">{`${errors.username ? 'A username is required' : ''}`}</p> */}

          <label>Email</label>
          <input
            className={`form-input col-12 ${errors.email ? 'is-error' : ''}`}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          {/* <p className="form-input-hint">{`${errors.email ? 'An email is required' : ''}`}</p> */}

          <label>Date of birth (YYYY-MM-DD)</label>
          <input
            className={`form-input col-12 ${errors.dob ? 'is-error' : ''}`}
            type="text"
            id="dob"
            name="dob"
            placeholder="Date of birth"
            value={data.dob}
            onChange={handleChange}
          />
          {/* <p className="form-input-hint">{`${errors.dob ? 'Date of birth is required' : ''}`}</p> */}

          <label className="form-checkbox">
            <input 
              className={`form-input col-12 ${errors.investing_virgin ? 'is-error' : ''}`}
              type="checkbox"
              name="investing_virgin"
              checked={data.investing_virgin}
              onChange={handleChange}
            /> 
            <i className="form-icon"></i> New to investing? 
          </label>
          <br />
          <div className="centre">
            <button className="btn btn-primary btn-lg vinco" type="submit">update my accouNt</button>
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default UserForm