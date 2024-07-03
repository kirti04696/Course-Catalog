import logo from "./logo.svg";
import "./App.css";
import { apiUrl, filterData } from "./Data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  console.log(filterData);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
        console.log(data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const filterCategory = async (filterType) => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (filterType == "All") {
        setCourses(data.data);
      } else {
        let filteredData = {};
        filteredData[filterType] = data.data[filterType];
        setCourses(filteredData);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="">
      <Navbar />
      <Filter filterData={filterData} filterCategory={filterCategory} />
      {loading ? <Spinner /> : <Cards courses={courses} />}
    </div>
  );
}

export default App;
