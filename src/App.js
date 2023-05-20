import { useState, useEffect } from 'react';
import DetailsList from './components/detailsList';
import AddDetails from './components/addDetails';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

function App() {
  const [data, setData] = useState([]);

  const getlocalStorageDetails = JSON.parse(localStorage.getItem("deatilsAdded"));
  useEffect(() => {
    if (getlocalStorageDetails == null) {
      setData([])
    } else {
      setData(getlocalStorageDetails);
    }
  }, [])

  // Add Details
  const addSubmit = (newData) => {
    const id = uuidv4();
    const newDetails = { id, ...newData }
    setData([...data, newDetails]);
    toast.success('You have successfully added a new details!');
    localStorage.setItem("deatilsAdded", JSON.stringify([...data, newDetails]));
  }

  // Delete Details
  const deleteDetails = (id) => {
    const deletedetails = data.filter((details) => details.id !== id);
    setData(deletedetails);
    toast.success('You have successfully deleted a details!');
    localStorage.setItem("deatilsAdded", JSON.stringify(deletedetails));
  }

  return (
    <>
      {
        <div className="container">
          <div className='addDetailsBody'>
            <h3>Add Details</h3>
            <AddDetails onSave={addSubmit} />
           
          </div>
          <h3>Number of Details: {data.length}</h3>
          {
            data.length > 0
              ?
              (<DetailsList data={data} onDelete={deleteDetails} />)
              :
              ('No Details Found!')
          }
        </div>
      }
    </>
  )
}

export default App;