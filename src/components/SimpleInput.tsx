import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredValue = nameInputRef.current?.value;

    setEnteredName('');
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
