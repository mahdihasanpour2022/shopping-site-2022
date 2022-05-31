// use in category components 
export const shorterName = (categoryName) => {
  if (categoryName.indexOf("_") !== -1) {
    const array_name = categoryName.split("_")
    return array_name[0]
  } else {
    return categoryName;
  }
}

// use in category components 
export const countItemInCategory = (products, categoryName) => {
  const filtered = products.filter(item => item.Category === categoryName)
  return filtered.length;
}

export const shoretersentense = (text) => {
  return `${text.split(" ").slice(0, 20).join(" ")}[...]`
}

// productDetail 
export const checkIsInCart = (cart,prodata) => {
  return !!(cart.find(item => item.id === prodata.id))
}
export const checkCount = (cart,prodata) => {
  if (cart.find(item => item.id === prodata.id)) {
    return cart.find(item => item.id === prodata.id).quantity
  }
}