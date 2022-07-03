// * Second


function isNumberNatural(number) {
  if (typeof number === "number") return true;

  return false;
}

console.log(isNumberNatural("5"));
console.log(isNumberNatural(true));
console.log(isNumberNatural(-4));
console.log(isNumberNatural(0));
console.log(isNumberNatural(1));
console.log(isNumberNatural(2.3));

//* Third

const fetchHandler = async (url) => {
  const res = await fetch(url);
  const fetchedData = await res.json();
  console.log(fetchedData);
  console.log(fetchedData.data.list.map(({ name }) => name));
};

fetchHandler("https://halloffame-server.herokuapp.com/fames?guest=true");
