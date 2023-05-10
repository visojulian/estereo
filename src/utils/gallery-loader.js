function galleryLoader() {
  const photoArr = [];
  for (let id = 1; id < 79; id++) {
    photoArr.push(`https://ik.imagekit.io/m5l3orqq5/image${id}.png`)
  }
  return photoArr;
};

export default galleryLoader();
