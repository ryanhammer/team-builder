import React from 'react'

export default function MemberForm(props) {
  // Pulling the needed props that are passed into MemberForm
  const { values, update, submit } = props

  // The function below handles changes to the form fields. It takes in a name for the field being changed and the value of the change
  const onChange = evt => {
    
    // Creating variables for name and value from the event object in the virtual DOM
    const { name, value } = evt.target;
    
    // Passing the values from the event object variables into the update function that was passed in as a prop 
    update(name, value);
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    evt.preventDefault();
    // c) use the `submit` callback coming in through props
    submit();
  }

  return (
    <form className='container' onSubmit={onSubmit}>
      <section className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
          <input 
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Enter team member name"
            maxLength="35"
          />

        </label>

        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input 
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="Enter an email address"
          />
        </label>

        <label>Role

          <select
            name="role"
            value={values.role}
            onChange={onChange} >
            <option value="">-- Select a Role --</option>
            <option value="jedi">Jedi Knight</option>
            <option value="padawan">Jedi Padawan</option>
            <option value="sith">Sith Lord</option>
            <option value="apprentice">Sith Apprentice</option>
          </select>
        </label>

        <div className='submit'>
          <button>Submit</button>
        </div>
      </section>
    </form>
  )
}
