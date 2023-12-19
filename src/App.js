// App.js
import React from 'react';
import CustomTable from './CustomTable';

const columns = ['ID', 'Name']; // Add more columns as needed

const data = [
  { ID: 1, Name: 'John Doe' },
  { ID: 2, Name: 'Jane Doe' },
  { ID: 3, Name: 'Adarsh' },
  { ID: 4, Name: 'Sahil' },
  { ID: 15, Name: 'Ankit' },
  { ID: 26, Name: 'Kuldeep' },
  { ID: 37, Name: 'Sonu' },
  { ID: 8, Name: 'Preyash' },
  { ID: 9, Name: 'Abhishek' },
  { ID: 10, Name: 'Vikash' },
  { ID: 11, Name: 'Vansh' },
  { ID: 12, Name: 'Amar' },
  { ID: 13, Name: 'Akbar' },
  { ID: 14, Name: 'Anthony' },
  
];

function App() {
  return (
    <div>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}

export default App;
