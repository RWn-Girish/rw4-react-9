import { useState } from "react";

const Controlled = () => {
    const [fname ,setFname] = useState("");
    const [lname ,setLname] = useState("");
    const [email ,setEmail] = useState("");
    const [pass ,setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fname: ', fname)
        console.log('Lname: ', lname)
        console.log('email: ', email)
        console.log('pass: ', pass)
    }
  return (
    <>
      <h2>Controlled Component</h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
        <br />
        <br />
        <label>Lastname:</label>
        <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
        <br />
        <br />
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label>Password:</label>
        <input type="text" name="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Controlled;
