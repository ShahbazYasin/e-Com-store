import React from 'react';
import "./SignUp.css";



export default function SignUp() {
  return (<>
    {/* <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>Sign Up</div> */}
    <div></div>
    <div>
      <div className="Fasco">
        FASCO
      </div>
      <p>Create Account</p>
      <div className='d-flex'>
        <div className='border m-2'>Sign Up with Google</div>
        <div className='border m-2'>Sign Up with Email</div>
      </div>
      <div>-OR-</div>

      <form>

        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' /><br />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone Number' /><br />
        <input type="Password" placeholder='Password' />
        <input type="Password" placeholder='Confirm Password' /><br />

        <button className="btn btn-dark shadow-lg p-2 mb-2">Create Account</button><br />

        <div>Already have an account?<a href="#">Login</a></div>

      </form>
      <a href="#">FASCO Terms & Condition</a>
    </div>

  </>
  )
}
