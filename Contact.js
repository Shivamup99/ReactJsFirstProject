import React ,{useState} from 'react';
const Contact =()=>{
	const [data , setData]=useState({
		Name:'',
		Number:'',
		Email :'',
		Message:'',

	});
	const InputEvent=(event)=>{
		const{name,value}=event.target;

		setData((preVal)=>{
			return{
				...preVal,
				[name]:value,
			};
		});
	};



	const formSubmit=(e)=>{
		e.preventDefault();
		alert(
			`My name is ${data.Name}.
			My mobile nuber is ${data.Number}.
			My email is ${data.Email}.
			My query is ${data.Message}`);
	};
	return (
		<>
		<div className="my-5">
		<h1 className="text-center"> Contact Us
		</h1>
		</div>
		<div className="container contact_div">
		<div className="row">
		<div className="col-md-6 col-10 mx-auto">
		<form onSubmit={formSubmit}>
       <div className="form-group">
       <label for="exampleFormControlInput1">Name</label>
       <input type="text" class="form-control" id="exampleFormControlInput1" 
       name="Name"
       value={data.Name}
       onChange={InputEvent}
       placeholder="Enter your name" />
       </div>


      <div className="form-group">
      <label for="exampleFormControlInput1">Number</label>
      <input type="number" className="form-control" id="exampleFormControlInput1" 
      name="Number"
       value={data.Number}
       onChange={InputEvent}
      placeholder="Contact Number"/>
      </div>


     <div className="form-group">
     <label for="exampleFormControlInput1">Email</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" 
      name="Email"
       value={data.Email}
       onChange={InputEvent}
      placeholder="name@example.com"/>
     </div>

      <div className="form-group">
      <label for="exampleFormControlTextarea1">Message</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" 
      rows="3"
      name="Message"
      value={data.Message}
      onChange={InputEvent}
      >Your Query</textarea>
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