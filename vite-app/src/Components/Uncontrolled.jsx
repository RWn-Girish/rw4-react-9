import { useRef } from "react";

const Uncontrolled = () => {
    const fnameRef = useRef("")
    const lnameRef = useRef("")
    const emailRef = useRef("")
    const passRef = useRef("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fanme: ", fnameRef.current.value)
    console.log("lanme: ", lnameRef.current.value)
    console.log("lanme: ", emailRef.current.value)
    console.log("lanme: ", passRef.current.value)
    
  };
  return (
    <>
      <h2>UnControlled Component</h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input type="text" name="fname" ref={fnameRef} />
        <br />
        <br />
        <label>Lastname:</label>
        <input type="text" name="lname" ref={lnameRef} />
        <br />
        <br />
        <label>Email:</label>
        <input type="text" name="email" ref={emailRef} />
        <br />
        <br />
        <label>Password:</label>
        <input type="text" name="password" ref={passRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
