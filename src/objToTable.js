export const makeTd = (text) => {
  const td = document.createElement('td');
  const textNode = document.createTextNode(text);
  td.appendChild(textNode);
  return td;
};

export const makeRow = (key, val) => {
  const tr = document.createElement('tr');
  tr.appendChild(makeTd(key));
  tr.appendChild(makeTd(val));
  return tr;
};

export const makeTbody = (obj) => {
  const tbody = document.createElement('tbody');
  Object.keys(obj).forEach((key) => {
    const row = makeRow(key, obj[key]);
    tbody.appendChild(row);
  });
  return tbody;
};

export const makeTable = (obj) => {
  const table = document.createElement('table');
  table.appendChild(makeTbody(obj));
  return table;
};
