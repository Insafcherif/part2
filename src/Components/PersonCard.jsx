import React , {useState} from 'react'

const PersonCard= (props) => {
    const { lastName, firstName, age, hair } = props;
    const [incage, setIncage] = useState(age);
  return (
    <div className="container">
    <h2>
      {lastName}, {firstName}
    </h2>
    <p>Age: {incage}</p>
    <p>Hair Color: {hair}</p>
    <button onClick={() => setIncage(incage + 1)}>
        Birthday Button for {lastName} {firstName} 
      </button>
  </div>
  )
}

export default PersonCard
