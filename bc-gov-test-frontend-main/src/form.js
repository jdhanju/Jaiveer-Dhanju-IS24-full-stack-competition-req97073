import { useState } from 'react';

function ProductForm(props) {
  const [productName, setProductName] = useState('');
  const [productOwnerName, setProductOwnerName] = useState('');
  const [Developers, setDeveloperNames] = useState(['', '', '', '', '']);
  const [scrumMasterName, setScrumMasterName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [methodology, setMethodology] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      productName,
      productOwnerName,
      Developers,
      scrumMasterName,
      startDate,
      methodology,
    };


    try {
        //post new product to server
      const postData = async() => {
        return await fetch('http://localhost:3000/api/addProduct', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    let response = await postData();
    
    //update state thats in App.js
    props.products.push(data)
    props.setRender([...props.products])
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        } catch (error) {
        console.error('Error submitting form:', error);
        }
    };


  const handleDeveloperNameChange = (event, index) => {
    const newDeveloperNames = [...Developers];
    newDeveloperNames[index] = event.target.value;
    setDeveloperNames(newDeveloperNames);
  };

  return (
    <div className='mainForm'>
        <form onSubmit={handleSubmit}>
        <label>
            Product Name:
            <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
        </label>
        <label>
            Product Owner Name:
            <input type="text" value={productOwnerName} onChange={(event) => setProductOwnerName(event.target.value)} />
        </label>
        <label>
            Developers Names:
            {Developers.map((developerName, index) => (
            <input
                key={index}
                type="text"
                value={developerName}
                onChange={(event) => handleDeveloperNameChange(event, index)}
            />
            ))}
        </label>
        <label>
            Scrum Master Name:
            <input type="text" value={scrumMasterName} onChange={(event) => setScrumMasterName(event.target.value)} />
        </label>
        <label>
            Start Date:
            <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
        </label>
        <label>
            Methodology:
            <input type="text" value={methodology} onChange={(event) => setMethodology(event.target.value)} />
        </label>
        <button type="submit">Add Product</button>
        </form>
    </div>
  );
}

export default ProductForm;