import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={`/drilling`}>drilling</Link>
      <Link to={`/exam`}>exam</Link>
    </>
  );
}

export default Home;
