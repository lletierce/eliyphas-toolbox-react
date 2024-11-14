import React from "react";
import { dnd4Rituals } from "../../../../../data/static-dnd4-rituals-data";
import { Link } from "react-router-dom";

export default function RitualsPage() {
  return (
    <div>
      <h1>Feyn rituals</h1>
      <ul>
        {dnd4Rituals.FEYN.map((ritual) => {
          return (
            <li key={ritual.id}>
              <Link to={`/ritual/${ritual.id}`}>{ritual.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}