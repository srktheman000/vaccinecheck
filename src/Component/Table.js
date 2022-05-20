import React from "react";
import { useState } from "react";
function Table(props) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
        placeholder="search by name"
      />
      {props.data ? (
        <div>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">Name</th>
                <th scope="col">Vaccine</th>
                <th scope="col">Avalibilty</th>
                <th scope="col">Capacity</th>
              </tr>
            </thead>
            {props.data.centers.length > 0 ? (
              <tbody>
                {props.data.centers
                  .filter((obj) => obj.name.toLowerCase().includes(search))
                  .map((item, i) => {
                    const firstsesssion = item.sessions[0];
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{firstsesssion.vaccine}</td>
                        <td>{firstsesssion.available_capacity}</td>
                        <td>
                          {firstsesssion.slots.map((item) => {
                            return <tr>{item.time}</tr>;
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            ) : (
              <tr>No data found</tr>
            )}
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Table;
