import { useState } from "react";

const DynamicComp = () => {
    const initalState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
    gender: "",
    hobbies: [],
  }
  const [inputForm, setInputForm] = useState(initalState);
  const [error, setError] = useState({});

  const handleChanged = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log(name, value)
    if (type == "checkbox") {
        setInputForm(prev => ({
            ...prev, 
            hobbies: checked ? [...prev.hobbies, value] : prev.hobbies.filter(v => v != value)
        }))
    } else {
      setInputForm({
        ...inputForm,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let formError = {};
    if(inputForm.fname == ""){
      formError.fnameErr = 'First Name is Empty'
    }else if(inputForm.fname.length < 5){
      formError.fnameErr = 'First name length is minimum 5 Characters'
    }

    if(inputForm.lname == ""){
      formError.lnameErr = "last name is Empty"
    }
    if(inputForm.email == ""){
      formError.emailErr = "EMail is Empty"
    }
    if(inputForm.password == ""){
      formError.passwordErr = "Password is Empty"
    }
    if(inputForm.gender == ""){
      formError.genderErr = "Select Any One"
    }
    if(inputForm.role == ""){
      formError.roleErr = "Select Any One Role"
    }
    if(inputForm.hobbies.length == 0){
      formError.hobbieErr = "Select atleast One "
    }

    setError(formError);

    return Object.keys(formError).length === 0 ? true : false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      console.log(inputForm);
      setInputForm(initalState);
    }
  };
  return (
    <>
      <h1>Employee Management</h1>
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input
          type="text"
          name="fname"
          value={inputForm.fname}
          onChange={handleChanged}
          style={{borderColor: error.fnameErr ? 'red' : ""}}
        />
        {error.fnameErr ? <i>{error.fnameErr}</i> : ""}
        <br />
        <br />
        <label>Lastname:</label>
        <input
          type="text"
          name="lname"
          value={inputForm.lname}
          onChange={handleChanged}
        />
        {error.lnameErr ? <i>{error.lnameErr}</i> : ""}
        <br />
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={inputForm.email}
          onChange={handleChanged}
        />
        {error.emailErr ? <i>{error.emailErr}</i> : ""}
        <br />
        <br />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={inputForm.password}
          onChange={handleChanged}
        />
        {error.passwordErr ? <i>{error.passwordErr}</i> : ""}
        <br />
        <br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value={"Male"}
          onChange={handleChanged}
        />
        Male
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={handleChanged}
        />
        Female
        {error.genderErr ? <i>{error.genderErr}</i> : ""}
        <br />
        <br />
        <label>Hobbies:</label>
        <input
          type="checkbox"
          name="hobbies"
          value={"Reading"}
          onChange={handleChanged}
        />
        Reading &nbsp;&nbsp;
        <input
          type="checkbox"
          name="hobbies"
          value={"Music"}
          onChange={handleChanged}
        />
        Music &nbsp;&nbsp;
        <input
          type="checkbox"
          name="hobbies"
          value={"Travelling"}
          onChange={handleChanged}
        />
        Travelling &nbsp;&nbsp;
        <input
          type="checkbox"
          name="hobbies"
          value={"Sport"}
          onChange={handleChanged}
        />
        Sport
        {error.hobbieErr ? <i>{error.hobbieErr}</i> : ""}
        <br />
        <br />
        <label>Role:</label>
        <select name="role" onChange={handleChanged}>
          <option value={""}>Select Role</option>
          <option value={"Admin"}>Admin</option>
          <option value={"HR Manager"}>HR Manager</option>
          <option value={"Designer"}>Designer</option>
          <option value={"Developer"}>Developer</option>
          <option value={"QA Tester"}>QA Tester</option>
        </select>
        {error.roleErr ? <i>{error.roleErr}</i> : ""}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default DynamicComp;
