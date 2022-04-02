import React from "react";
import styles from "./Examples.module.css";
export const Examples = ({ DATA }) => {
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Accion</th>
              <th>Descripcion</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {DATA.map((data) => (
              <tr>
                <td>{data.title}</td>
                <td>{data.text}</td>
                <td>{data.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
