import styled from "styled-components";

export default function CustomTable({
  // default values  for props
  headers = ["header1", "header2"],
  rows = [
    ["value1", "value2"],
    ["value2", "value3"],
  ],
}) {
  return (
    <CustomTableStyled>
      <thead>
        <tr>
          {headers.map((headCell, i) => {
            return <th key={i}>{headCell}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, j) => {
          return (
            <tr key={j} className="row">
              {row.map((cell, k) => {
                return <td key={k}>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </CustomTableStyled>
  );
}

const CustomTableStyled = styled.table`
  th {
    padding: 5px 10px;
      background-color: rgb(7, 55, 99);
      color: white;
  }

  tr {
    text-align: center;
  }
`;