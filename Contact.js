// import { Phone } from '@mui/icons-material';
// import React, { useState } from 'react';

// const Contact = () => {
//   const[data,setData]=useState({
//     fullname:"",
//     phone:"",
//     email:"",
//     msg:" ",

//   });
//   const InputEvent=(event)=>{
//     const {name,value}=event.target;
//     setData((preVal)=>{
//       return
//       {

//       ...preVal,
//       [name]:value,
//       };

//     });

//   }
//   const formSubmit=()=>{

//   }
//   return (
//     <>
//       <div className="my-5">
//         <h2 className="text-center">Contact Us</h2>
//       </div>
//       <div className="container contact_div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//           <form onSubmit={formSubmit}>
//           <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label"> FullName</label>
//             <input type="text" class="form-control" id="exampleFormControlInput1"
//             name="fullname"
//             value={data.fullname} 
//             onChange={InputEvent}
//             placeholder="Enter Your Name"/>
//           </div>
//           <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label">Phone No</label>
//             <input type="number" class="form-control" id="exampleFormControlInput1" 
//             name="mobile-No"
//             value={data.phone} 
//             onChange={InputEvent}
//             placeholder="Mobile-No"/>
//           </div>
//           <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label">Email address</label>
//             <input type="email" class="form-control" id="exampleFormControlInput1" 
//             name="email"
//             value={data.email} 
//             onChange={InputEvent}
            
//             placeholder="name@example.com"/>
//           </div>
//           <div class="mb-3">
//             <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
//             name="fullname"
//             value={data.msg} 
//             onChange={InputEvent}></textarea>
//           </div>
//           <div class="col-12">
//             <button class="btn btn-outline-primary" type="submit">Submit form</button>
//           </div>
//           </form>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Full Name: ${data.fullname}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.msg}`);
  };

  return (
    <>
      <div className="my-5">
        <h2 className="text-center">🎊 Contact Us 🎊</h2>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone No</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile-No"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
