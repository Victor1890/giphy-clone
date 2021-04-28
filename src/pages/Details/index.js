const Details = ({ params }) => {
  console.log(params);
  return <h1>{params.id}</h1>;
};

export default Details;
