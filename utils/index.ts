const convertPrice = (price: string) => {
  return Number(price).toLocaleString("fa-ir").split("٬").join("/");
};

export { convertPrice };
