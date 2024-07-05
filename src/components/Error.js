import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <div className='px-56 py-6 flex justify-center grid content-center min-h-screen bg-slate-900 text-white' style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <h1>Oops!</h1>
      <h1>Something failed....</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
}

export default Error;
