const showStars = (nbBase, reverse, pyramid) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(pyramid.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(pyramid.repeat(i))
    }
  }
}


const nbBase = 20

showStars(nbBase, false, 'A')