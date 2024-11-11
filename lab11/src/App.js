import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <EMIcal/>
  );
}
import React, {useState} from "react"; 

function EMIcal() { 

const [loan, setLoan] = useState(0); 

const [tenure, setTenure] = useState(0); 

const [rate, setRate] = useState(0); 

const [type, setSelectType] = useState(" "); 

const [emi, setEMI] = useState(0); 

const handleLoanAmount = (e) => { 
  setLoan(e.target.value); 

}; 

const handleTenure = (e) => { 

setTenure(e.target.value); 

}; 

const submitMe = (e) => { 

e.preventDefault(); 

calculateEMI(); 

}; 

const calculateEMI = () => { 

var em = loan * rate * ((Math.pow((1+rate),tenure)/(Math.pow((1+rate),tenure)-1))); 

setEMI(em); 

}; 
const myselect = () => { 

 

  var item = document.getElementById("tenureType"); 
  
  setSelectType(item.options[item.selectedIndex].text); 
  
  console.log(type); 
  
  } 
  
  const handleInterestRate = (e) => { 
  
  setRate(e.target.value); 
  
  }; 
  
  const clear = () => { 
  
  } 
  return ( 

    <div className="App"> 
    
    <h1>EMI Calculator</h1> 
    
    <table border="0px" align="Center" style = {{width: "50%"}}> 
    
    <tr> 
    
    <td> <label>Loan Amount: Rs </label></td> 
    
    <td> <input type="text" name="loan" value={loan} onChange={handleLoanAmount}/></td> 
    
    </tr> 
    
    <tr> 
    
    <td><label> Loan Tenure: </label></td> 
    
    <td><input type="text" name="name" value={tenure} onChange={handleTenure} /></td> 
    
    </tr> 
    
    <tr> 
    <td></td> 

<td> 

<select name="tenureType" id="tenureType" onChange={myselect}> 

<option value="Months">Months</option> 

<option value="Years">Years</option> 

</select> 

</td> 

</tr> 

<tr> 
<td><label> Interest Rate: </label> </td> 

<td> <input type="text" name="rate" value={rate} onChange={handleInterestRate} 

/></td> 
</tr> 

<tr> 

<td></td> 

</tr> 

<tr> 

<td> 

<button onClick={clear}>Clear</button> 

</td> 

<td> 

<button onClick={submitMe}>Calculate</button> 

</td> 

</tr> 

</table> 

<div id="result">The Every Monthly Installment (EMI):{emi}</div> 

</div> 

); 

} 

export default App;