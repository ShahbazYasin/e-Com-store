import React from 'react'



export default function SignIn() {
  return (<>
    <div></div>
    <div>
      <div className="Fasco">
        FASCO
      </div>
      <p>Sign In To FASCO</p>
      <div className='d-flex'>
        <div className='border m-2'>Sign Up with Google</div>
        <div className='border m-2'>Sign Up with Email</div>
      </div>
      <div>-OR-</div>

      <form>
        <input type="text" placeholder='Email' /><br />
        <input type="Password" placeholder='Password' /><br /><br />
        <button className="btn btn-dark shadow-lg p-2 mb-2">Sign In</button><br />
        <button className="btn btn-white shadow-lg p-2 mb-2">Register Now</button><br />

        <a href="#">Forget Password?</a>


      </form>
      <a href="#">FASCO Terms & Condition</a>
    </div>


  </>
  )
}
