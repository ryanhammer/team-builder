import React, { useState, useEffect } from 'react'
import Member from './Member';
import MemberForm from './MemberForm';
import { v4 as uuid } from 'uuid';

// Create some initial Team Member data; the uuid() function will be used to generate random user ids to use as keys
const initialMembersList = [
  {
    id: uuid(),
    name: 'Qui-Gon',
    email: 'QGJinn@jediknight.temple',
    role: 'Jedi Knight',
  },
  {
    id: uuid(),
    name: 'Darth Maul',
    email: 'darthmaul@sith.apprentice',
    role: 'Sith Apprentice',
  },
  {
    id: uuid(),
    name: 'Annakin S.',
    email: 'Ani_S@padawan.temple',
    role: 'Jedi Padawan',
  },
];

// Initializing the shape of the state that drives the form
const initialFormValues = {
  // This will be a text input
  name: '',
  // This will be an email input
  email: '',
  // This will be a dropdown menu
  role: '',
}

export default function App() {

  // Use State to hold member data
  const [members, setMembers] = useState(initialMembersList);

  // Using State to hold form values
  const [formValues, setFormValues] = useState(initialFormValues);

  //  The function below takes in the name of an input and its value, and updates `formValues`
  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue});

  };

  // The submitForm function will be used inside the form and will fire when the submit button is pressed. It will create a new Member object, trimming any whitespace from the user form input
  const submitForm = () => {

    const newMember = {
      id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    // The if statement below prevents further action by the function if any of the input values is an empty string after trimming/dropdown selection
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    }
    // Use POST to send the new member to backend, and on success updates the list of team members in state with the new member from API and clears the form
    else {
      setMembers([newMember, ...members]);
      setFormValues(initialFormValues);
    }
  }

  return (
    <body>
      <section className='container'>
        <h1>Form App</h1>

        <MemberForm
          // 🔥 STEP 2 - The form component needs its props.
          //  Check implementation of FriendForm
          //  to see what props it expects.
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />

        {
          members.map(member => {
            return (
              <Member key={member.id} details={member} />
            )
          })
        }
      </section>
    </body>
  )
}