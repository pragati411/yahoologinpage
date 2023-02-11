import { useState, useEffect } from "react";
import HeaderSection from "./Header";
import "./LoginPage.css";
function RegistrationForm() {
  const initialValues = {
    FullName: "",
    email: "",
    password: "",
    birthyear: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.FullName) {
      errors.FullName = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    }

    if (!values.birthyear) {
      errors.birthyear = "Birth year is requred!";
    }
    return errors;
  };

  return (
    <>
      <HeaderSection />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <div style={{}}>
              <label>FullName</label>
              <input
                type="text"
                name="username"
                placeholder="FullName"
                value={formValues.FullName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.FullName}</p>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div>
              <label>Create Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div>
              <label>Birth Year</label>
              <input
                type="year"
                name="year"
                placeholder="Birth Year"
                value={formValues.birthyear}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.birthyear}</p>
            <h4>
              By clicking <a href="">continue</a>, you agree to the Terms and
              acknowledge the <a href="">Privacy Policy</a>
            </h4>
            <button>Continue</button>
            <h3>or create an account with</h3>
            <button>Google</button>
            <button>Email</button>
          </div>
          <h4>
            Already have an account?<a href="">sign in </a>
          </h4>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
