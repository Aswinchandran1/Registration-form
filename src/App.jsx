import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import './App.css'
import form_img from './assets/form-img.png'
import { useState } from 'react'


function App() {

  const [userName, setuserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");

  const [invalidName, setinvalidName] = useState(false)
  const [invalidPhone, setinvalidPhone] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidDateOfBirth, setInvalidDateOfBirth] = useState(false)
  const [invalidGender, setInvalidGender] = useState(false)
  const [invalidCourse, setInvalidCourse] = useState(false)
  const [invalidAddress, setInvalidAddress] = useState(false)

  const [noName, setNoName] = useState(false)
  const [noNumber, setNoNumber] = useState(false)
  const [noEmail, setNoEmail] = useState(false)

  const validateInput = (inputEvent) => {

    const { name, value } = inputEvent;

    if (name == "name") {
      setuserName(value)
      if (!!value.match(/^[A-Za-z]+(?: [A-Za-z]+)*$/)) {
        setNoName(false)
        setinvalidName(false)
      } else {
        setinvalidName(true)
      }
    }
    else if (name == "mobile") {
      setMobileNumber(value)
      setNoNumber(false)
      if (!!value.match(/^\+?[0-9][0-9 -.]{9,14}$/)) {
        setinvalidPhone(false)
      } else {
        setinvalidPhone(true)
      }
    }
    else if (name == "email") {
      setEmail(value)
      setNoEmail(false)
      if (!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        setInvalidEmail(false)
      } else {
        setInvalidEmail(true)
      }
    }
    else if (name == "dateOfBirth") {
      if (value != "") {
        setDateOfBirth(value)
        setInvalidDateOfBirth(false)
        console.log(dateOfBirth);
      }
    }
    else if (name == "gender") {
      if (value != "") {
        setGender(value)
        setInvalidGender(false)
        // console.log(gender);
      }
    }
    else if (name == "course") {
      if (value != "") {
        setCourse(value)
        setInvalidCourse(false)
      }
    }
    else if (name == "address") {
      if (value != "") {
        setAddress(value)
        setInvalidAddress(false)
      }
    }
  }

  const submitBtnClick = () => {
    if (userName == "") {
      setNoName(true)
    } else {
      setNoName(false)
    }
    if(mobileNumber==""){
      setNoNumber(true)
    }
    else{
      setNoNumber(false)
    }
    if(email==""){
      setNoEmail(true)
    }else{
      setNoEmail(false)
    }

    if (dateOfBirth == "") {
      setInvalidDateOfBirth(true)
    } else {
      setInvalidDateOfBirth(false)
    }
    if (gender == "") {
      setInvalidGender(true)
    } else {
      setInvalidGender(false)
    }
    if (course == "") {
      setInvalidCourse(true)
    } else {
      setInvalidCourse(false)
    } if (address == "") {
      setInvalidAddress(true)
    } else {
      setInvalidAddress(false)
    }
    if (userName && mobileNumber && email && dateOfBirth && gender && course && address) {
      alert("Data Stored Successfully")
      alert(`             User Name : ${userName}
             Mobile Number : ${mobileNumber}
             Email : ${email}
             Date Of Birth : ${dateOfBirth}
             Gender : ${gender}
             Course : ${course}
             Address :${address}`)
      cancelBtnClick()
    }
  }

  const cancelBtnClick = () => {
    setuserName("")
    setMobileNumber("")
    setEmail("")
    setDateOfBirth("")
    setGender("")
    setCourse("")
    setAddress("")
  }

  return (
    <div>
      <main>
        <section className='sectionContainer'>
          <div className='formImage'>
            <h3>Student Registration</h3>
            <img src={form_img} alt="" />
          </div>
          <div className="form-content">
            <form action="">
              <TextField value={userName || ""} name='name' onChange={(event) => { validateInput(event.target) }} className='formComp ' id="outlined-basic" label="Name" variant="outlined" />
              {invalidName && <p className='warning'>* Invalid User Name</p>}
              {noName && <p>* Please Enter Your Name</p>}

              <TextField value={mobileNumber || ""} name='mobile' onChange={(event) => { validateInput(event.target) }} className='formComp mt-2' id="outlined-basic" label="Mobile" variant="outlined" />
              {invalidPhone && <p className='warning'>* Enter a Valid Phone Number</p>}
              {noNumber && <p>* Please Enter Your Mobile Number</p>}

              <TextField value={email || ""} name='email' onChange={(event) => { validateInput(event.target) }} className='formComp mt-2' id="outlined-basic" label="Email" variant="outlined" />
              {invalidEmail && <p className='warning'>* Enter a Valid Email</p>}
              {noEmail && <p>* Please Enter Your Email</p>}

              <label className='mt-2' htmlFor="">Date of Birth</label>
              <input value={dateOfBirth || ""} name='dateOfBirth' onChange={(event) => { validateInput(event.target) }} className='formComp date ' type="date" required />
              {invalidDateOfBirth && <p>* Date of Birth is Mandatory</p>}

              <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2'>Gender</FormLabel>
              <RadioGroup value={gender || ""} name="gender" onChange={(event) => { validateInput(event.target) }} row aria-labelledby="demo-row-radio-buttons-group-label" >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              {invalidGender && <p>* Please Enter your Gender</p>}


              <select value={course || ""} name="course" onChange={(event) => { validateInput(event.target) }} id="" className='mt-2'>
                <option value="">Select your Cource</option>
                <option value="Biology Science">Biology Science</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Humanities">Humanities</option>
                <option value="Commerce">Commerce</option>
              </select>
              {invalidCourse && <p>* Please Select your Course</p>}


              <TextField value={address || ""} name='address' onChange={(event) => { validateInput(event.target) }} className='formComp mt-2' id="outlined-multiline-flexible" label="Address" multiline rows={2} />
              {invalidAddress && <p>* Please ENter Your Address</p>}

              <Stack spacing={2} direction="row" className='mt-2'>
                <Button onClick={submitBtnClick} style={{ width: '50%', padding: '20px' }} variant="contained">Register</Button>
                <Button onClick={cancelBtnClick} style={{ width: '50%', padding: '20px' }} variant="outlined">Cancel</Button>
              </Stack>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
