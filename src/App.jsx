import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => id !== tour.id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTours(data);
      if (data.msg === "route not found") setError(true);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (isError)
    return (
      <main>
        <h2>Error</h2>
      </main>
    );

  if (tours.length === 0)
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours} style={{marginTop: "2rem"}}>
            refresh
          </button>
        </div>
      </main>
    );

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      <main>
        <div className="title">
          <button className="btn" onClick={() => setTours([])}>
            Remove all
          </button>
        </div>
      </main>
    </main>
  );
};
export default App;
