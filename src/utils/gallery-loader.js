function galleryLoader(props) {
  const photoArr = [];
  for (let id = 1; id < 79; id++) {
    photoArr.push(`/api/images/image${id}`);
  }
  return photoArr;
};

export default galleryLoader();
