import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  
  function handleSubmit (event){
    event.preventDefault();
    const formData = {
      firstName:firstName,
      lastName:lastName,
    };
    const dataArray = [...submittedData, formData];

    props.sendFormDataSomewhere(formData);
    setSubmittedData(dataArray);
    setFirstName('');
    setLastName('');    
  }

  // function handleSumbit(event) {
  //   event.preventDefault();

  //   const formData = {
  //     firstName: e.target[0].value,
  //     lastName: e.target[0].value
  //   };
  //   props.sendFormDataSomewhere(formData);
    
  // }
  const listOfSumbissions = submittedData.map((data,index) => {
    return(
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
    });


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
        <h3>Submission</h3>
        {listOfSumbissions}
     </div>   


  );
}

export default Form;