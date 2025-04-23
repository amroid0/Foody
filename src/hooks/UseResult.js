import { useEffect, useState } from "react";
import yelp from "../apis/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchResult = async (query) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: query,
          location: "san jose",
        },
      });
      console.log(response.data.businesses[0])
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("something went wrong");
      console.log(err)

    }
  };

  useEffect(() => {
    searchResult("pasta");
  }, []);
  return [searchResult, results, errorMessage];
};
