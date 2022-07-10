import logo from "./logo.svg";
import "./App.css";
//npm install react-hook-form
import { useForm } from "react-hook-form";

function Form() {
  const checkReg = useForm();
  console.log(checkReg, "cc");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("test data", data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* <div className="form-group">
          <label htmlFor="fullname">State</label>
            <input 
            type="text"
            className="form-control"
            id="fullname"
            {...register("address.state")}
            // key name also match with DB schema
            name="address.state"
            />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">City</label>
            <input 
            type="text"
            className="form-control"
            id="fullname"
            {...register("address.city")}
            // key name also match with DB schema
            name="address.city"
            />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Zipcode</label>
            <input 
            type="text"
            className="form-control"
            id="fullname"
            {...register("address.zipcode")}
            // key name also match with DB schema
            name="address.zipcode"
            />
        </div> */}


        <div className="form-group">
          <label htmlFor="fullname">Zipcode b1</label>
            <input 
            type="text"
            className="form-control"
            id="fullname"
            {...register("address[0]")}
            // key name also match with DB schema
            name="address[0]"
            />
        </div>


        <div className="form-group">
          <label htmlFor="fullname">Zipcode b2</label>
            <input 
            type="text"
            className="form-control"
            id="fullname"
            {...register("address[1]")}
            // key name also match with DB schema
            name="address[1]"
            />
        </div>


        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          {/* take name as a key and value as value  */}
          <input
            type="text"
            className="form-control"
            id="fullname"
            {...register("fullname")}
            // key name also match with DB schema
            name="fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email")}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            {...register("phone")}
            name="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            // {...register('value_name')}
            {...register("password")}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="male">
              male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="female">
              female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="other">
              other
            </label>
          </div>
        </div>
        <div className="form-group">
          <select className="custom-select" {...register("state")}>
            <option selected>Select your state</option>
            <option value="Delhi">Delhi</option>
            <option value="Punjab">Punjab</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Bihar">Bihar</option>
          </select>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              value="agree"
              {...register('terms_and_conditions')}
            />
            <label className="form-check-label" htmlFor="terms">
              I agree all terms and conditons
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="updates" 
            {...register('send_me_updates')}
            />
            <label className="form-check-label" htmlFor="updates">
              send me latest Bootstrap updates
            </label>
          </div>
        </div>
        <button type="submit">submit form</button>
      </form>
    </div>
  );
}

export default Form;
