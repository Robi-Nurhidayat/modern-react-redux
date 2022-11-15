export const addCount = () => {
  return {
    type: "tambah",
    payload: 100,
  };
};

export const minCount = () => {
  return {
    type: "kurangi",
  };
};
