import { data } from "./data.js";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-4">Contact keeper</h1>
        <form>       
          <input type="date" onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" onChange={(e) => setEndDate(e.target.value)} />
        </form>
        <table className="table">
          <thead className="table">
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                if (startDate !== "") {
                  const itemDate = new Date(item.date).getTime();
                  const start = new Date(startDate).getTime();
                  const end = new Date(endDate).getTime();
                  return itemDate >= start  && itemDate <= end;
                } else {
                  return item;
                }
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.date}</td>
                </tr>
              ))}        
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
