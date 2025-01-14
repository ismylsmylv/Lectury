export function sortDepartmentsByLength(data) {
  const sorted = data.sort(
    (a, b) => a.departments.length - b.departments.length
  );

  const short = [];
  const long = [];
  sorted.forEach((item, index) => {
    if (index % 2 === 0) {
      short.push(item);
    } else {
      long.push(item);
    }
  });
  const result = [...short, ...long.reverse()];

  return result;
}

export function convertNumbersToString(number: number) {
  // adds points and k to large numbers
  const useK = number > 1000 ? "k" : "";
  const divider = useK ? 100 : 1;
  const dividedNumber = (number / divider).toFixed(0) + useK;
  return dividedNumber;
}
