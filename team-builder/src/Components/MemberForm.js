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

  // The function below handles form submission events
  const onSubmit = evt => {

    // Preventing the browser from reloading when the form submits
    evt.preventDefault();

    // Invoke the submit function that was passed in as a prop
    submit();
  }

  return (
    <form className='container' onSubmit={onSubmit}>
      <section className='form-group'>
        {/* There are three inputs for the form: Name and Email, which will take in text and email types respectively, and a dropdown for the different possible team menber roles */}
        <label>Name: 
          <input 
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Add member name"
            maxLength="35"
          />
        </label>

        <label>Email:
          <input 
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="Enter an email address"
          />
        </label>

        <label>Role:
          <select
            name="role"
            value={values.role}
            onChange={onChange} >
            <option value="">-- Select a Role --</option>
            <option value="Jedi Knight">Jedi Knight</option>
            <option value="Jedi Padawan">Jedi Padawan</option>
            <option value="Sith Lord">Sith Lord</option>
            <option value="Sith Apprentice">Sith Apprentice</option>
          </select>
        </label>

        <div className='submit'>
          <button>Submit</button>
        </div>
      </section>
    </form>
  )
}
