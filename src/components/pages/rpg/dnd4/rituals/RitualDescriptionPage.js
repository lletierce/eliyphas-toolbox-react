import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DEFAULT_RITUAL, dnd4Rituals } from "../../../../../data/static-dnd4-rituals-data";
import { findObjectById } from "../../../../../utils/array";
import styled from "styled-components";
import CustomTable from "../../../../reusable-ui/CustomTable";


export default function RitualDescriptionPage() {
  const [ritual, setRitual] = useState(DEFAULT_RITUAL);

  const { ritualId } = useParams();

  useEffect(() => {
    const foundRitual = findObjectById(ritualId, dnd4Rituals.FEYN);
    setRitual(foundRitual || DEFAULT_RITUAL);
  }, []);

  return (
    <RitualDescriptionPageStyled>
      <Link to={"/"}>
        <span>return to home page</span>
      </Link>
      <h3>{ritual.name}</h3>
      <hr></hr>
      <p>
        <b>
          <u>Niveau</u> :{" "}
        </b>
        {ritual.level}
      </p>
      <p>
        <b>
          <u>Catégorie</u> :{" "}
        </b>
        {ritual.category}
      </p>
      <p>
        <b>
          <u>Temps d'incantation</u> :{" "}
        </b>
        {ritual.time}
      </p>
      {
        ritual.duration !== "none" && (<p>
        <b>
          <u>Durée</u> :{" "}
        </b>
        {ritual.duration}
      </p>)
      }
      <p>
        <b>
          <u>Coût des composants</u> :{" "}
        </b>
        {typeof(ritual.componentCost) === 'number' ? (ritual.componentCost+" po") : (ritual.componentCost) }
      </p>
      <p>
        <b>
          <u>Prix d'achat</u> :{" "}
        </b>
        {ritual.marketPrice} po
      </p>
      <p>
        <b>
          <u>Compétence-clé</u> :{" "}
        </b>
        {ritual.keySkill}
      </p>
      <div className="description">{ritual.description}</div>
      {ritual.needTable && <CustomTable headers={ritual.table.headCells} rows={ritual.table.data} />}
    </RitualDescriptionPageStyled>
  );
}

const RitualDescriptionPageStyled = styled.div`
  padding: 10px;
  
  .description{
    max-width: 400px;
    text-align: justify;
    margin-bottom: 20px;
    white-space: pre-line; /* or pre-wrap | Fix '\n' for string in rendering react component */
  }
`;