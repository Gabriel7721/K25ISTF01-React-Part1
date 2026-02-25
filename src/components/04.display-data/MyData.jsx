import img1 from "/data/scientist/img001.png";

const user = {
  name: "Einstein",
  imageUrl: img1,
  imgSize: 90,
};

const MyData = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imgSize,
          height: user.imgSize,
          borderRadius: user.imgSize / 2,
          objectFit:"cover"
        }}
      />
    </>
  );
};

export default MyData;
