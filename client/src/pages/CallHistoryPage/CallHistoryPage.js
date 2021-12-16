import React from "react";
import CallHistory from "../../components/CallHistory/callHistory";
import { useFetchCalls } from "../../hooks";
import { createCall } from "../../actions/calls";

const CallHistoryPage = () => {
  const { calls, isLoading, fetchCallsHistory } = useFetchCalls();

  return (
    <div>
      <h2>CallHistory Page</h2>
      <CallHistory
        calls={calls}
        isLoading={isLoading}
        getCalls={fetchCallsHistory}
        createCall={createCall}
      />
    </div>
  );
};

export default CallHistoryPage;
