export const getmonthno = (currobj) => {
  const monts = [
    { month: "January", monthno: 1 },
    { month: "February", monthno: 2 },
    { month: "March", monthno: 3 },
    { month: "April", monthno: 4 },
    { month: "May", monthno: 5 },
    { month: "June", monthno: 6 },
    { month: "July", monthno: 7 },
    { month: "August", monthno: 8 },
    { month: "September", monthno: 9 },
    { month: "October", monthno: 10 },
    { month: "November", monthno: 11 },
    { month: "December", monthno: 12 },
  ];
  const montobj = monts.find((elem) => elem.month === currobj.month);
  return { ...currobj, monthno: montobj.monthno };
};
export function setmonthnum(array) {
  /**[
   * { month: "February", emission: 0 }
   * ]
   */
  return array.map((elem) => getmonthno(elem));
}
