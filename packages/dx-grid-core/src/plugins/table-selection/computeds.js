import { TABLE_SELECT_TYPE } from './constants';
import { TABLE_DATA_TYPE } from '../table-view/constants';

export const tableColumnsWithSelection = (tableColumns, selectionColumnWidth) => [
  { key: TABLE_SELECT_TYPE, type: TABLE_SELECT_TYPE, width: selectionColumnWidth },
  ...tableColumns,
];

export const tableRowsWithSelection = (tableRows, selection) => {
  const selectionSet = new Set(selection);
  return tableRows
    .map((tableRow) => {
      if (tableRow.type !== TABLE_DATA_TYPE || !selectionSet.has(tableRow.rowId)) return tableRow;
      return { selected: true, ...tableRow };
    });
};
