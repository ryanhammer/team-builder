import React, { useState, useEffect } from 'react'
import Member from './Member';
import MemberForm from './MemberForm';

// 👉 the shape of the state that drives the form
const initialFormValues = {
  // This will be a text input
  name: '',
  // This will be an email input
  email: '',
  // This will be a dropdown menu
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState([])

  // Using State to hold form values
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({...formValues, [inputName]: inputValue});
  };

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    //  b) prevent further action if either username or email or role is empty string after trimming
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newFriend.username || !newFriend.email || !newFriend.role) {
      return;
    }
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    axios
      .post('fakeapi.com', newFriend)
      .then(res => {
        setFriends([newFriend, ...friends]);
        setFormValues(initialFormValues);
      })
      .catch(err=> {console.log(err)})
    //  d) also on success clear the form
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setFriends(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>

      <FriendForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
