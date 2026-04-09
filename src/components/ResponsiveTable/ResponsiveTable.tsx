import { useState } from "react";
import { getHeaderStyle, hideHeaderOnTabletAndDown } from "./tableHeadsStyleUtils";

interface TableData {
  id: string;
  cells: {
    [key: string]: string | React.ReactNode;
    Button: React.ReactNode | React.ReactNode[];
  };
}

type Props = {
  tableHeads: string[];
  tableData: TableData[];
};

const TABLE_STYLES = {
  bgColor: "",
  borderColor: "blue",
}

const CELL_STYLES = {
  bgColor: "bg-violet-950",
  hover: "hover:bg-violet-900",
}

export const ResponsiveTable: React.FC<Props> = ({ tableHeads, tableData }) => {
  const [columnHover, setColumnHover] = useState<number>(-1);

  const handleMouseEnter = (index: number) => {
    setColumnHover(index);
  };

  const handleMouseLeave = () => {
    setColumnHover(-1);
  };

  return (
    <table className={`table-auto cursor-pointer mx-auto min-w-full group ${TABLE_STYLES.bgColor} shadow-lg border border-bs-cyan-400`}>
      <thead className="table-header-group shadow-lg">
        <tr>
          {tableHeads.map((header, index) => {
            return (
              <th
                key={header}
                className={`${getHeaderStyle(header)} ${columnHover === index ? CELL_STYLES.bgColor : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave} 
              >
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="table-row-group">
        {tableData.map((row) => (
          <tr
            key={row.id}
            className={`table-row transition ease-in-out hover:bg-bg`}
          >
            {Object.entries(row.cells).map(([header, content], index) => {
              const visibility = hideHeaderOnTabletAndDown(header); // returns "hidden md:table-cell" or ""
              const bgColor = columnHover === index ? CELL_STYLES.bgColor : "";
              const hover = `transition ease-in-out ${CELL_STYLES.hover}`;

              if (header === 'Status') {
                console.log("I want to see dropdown here")
                return (
                 <select>
                    <option value="todo">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                )  
              } else {
                return (
                  <td
                    key={header}
                    className={`border ${visibility} ${bgColor} ${hover}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    id={row.id}
                  >
                  {content}
                </td>
                )
              };
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
