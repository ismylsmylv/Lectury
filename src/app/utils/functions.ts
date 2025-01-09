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
