import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]); // the value within the array cotrols whether or not the function is going to be invoked

  return resources;
};

export default useResources;
