import React, { useEffect } from "react";
import { RootState } from "../store/configureStore";
import { fetchCounterData } from "../actions";
import { connect } from "react-redux";


interface CounterContainerProps {
  counterData: number;
  loading: boolean;
  error: string | null | undefined;
  fetchCounterData: (arg: number) => Promise<any>;
}

const CounterContainer: React.FC<CounterContainerProps> = ({
  counterData,
  loading,
  error,
  fetchCounterData,
}) => {
    
  useEffect(() => {
    fetchCounterData(15);
  }, [fetchCounterData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{counterData}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  counterData: state.counter.value,
  loading: state.counter.loading,
  error: state.counter.error,
});

const mapDispatchToProps = {
  fetchCounterData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
