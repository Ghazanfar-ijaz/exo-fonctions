const tab = [99, 100, 101, 1]

const biggest = (tab) => {
  tab = (Math.max(99, 100, 101, 1))
  return tab
}
const nb = biggest(tab)
console.log(nb)

const sortAscend = [99, 100, 101, 1];
sortAscend.sort(function (a, b) {
  return a - b;
});
console.log(sortAscend)