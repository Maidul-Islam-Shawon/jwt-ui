import React, { useEffect } from "react";

const DashboardPage = (props) => {
  //const subscription = props.source.subscribe();
  console.log(props);
  // useEffect(() => {
  //   const subscription = props.source.subscribe();
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [props.source]);
  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>This is dashboard page</p>
    </div>
  );
};

export default DashboardPage;
