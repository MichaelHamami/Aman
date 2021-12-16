import { useState, useEffect } from "react";
import { getCalls } from "../actions/calls";

export const useFetchCalls = () => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCallsHistory();
  }, []);

  async function fetchCallsHistory() {
    console.log("fetchCallsHistory called");
    setIsLoading(true);
    const calls = await getCalls();
    setIsLoading(false);
    if (calls != null) setCalls(calls);
  }

  return { calls, isLoading, fetchCallsHistory };
};
