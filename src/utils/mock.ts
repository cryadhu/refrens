import Images from "../../assets/images";

const getRandomImage = (index: number) => {
  switch (index) {
    case 0:
      return Images.prof2;
    case 1:
      return Images.prof4;
    case 2:
      return Images.prof3;
    case 3:
      return Images.prof1;
    default:
      return Images.prof4;
  }
};

export { getRandomImage };
