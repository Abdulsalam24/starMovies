import React from "react";

function RefreshPage() {
  return (
    <div className="refresh">
      <div>
        <h2>Something went wrong</h2>
        <button onClick={() => window.location.reload()}>kindly refresh</button>
      </div>
    </div>
  );
}

export default RefreshPage;
