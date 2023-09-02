exports.jsArrayToSQLArrayConverter = (jsArray) => {
  let SQLArray = "";
  SQLArray += "[";
  for (let item of jsArray) {
    SQLArray += `'${item}'`;
    if (jsArray.slice(-1)[0] !== item) {
      SQLArray += ", ";
    }
  }
  SQLArray += "]";
  return SQLArray;
};
