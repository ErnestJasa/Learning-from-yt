import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-4">Contact keeper</h1>
        <form>
          <input
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search contacts"
            type="text"
            className="form-control"
          />
        </form>
        <table className="table">
          <thead className="table">
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item)=> {
              return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
