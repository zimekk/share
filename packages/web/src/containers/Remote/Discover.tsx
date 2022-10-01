import React, { MouseEventHandler, useCallback } from "react";

export function Discover({ discover }) {
  return (
    <div>
      <h3>UPNP</h3>
      <button
        onClick={useCallback<MouseEventHandler<HTMLButtonElement>>(
          (event) => discover(),
          []
        )}
      >
        Discover
      </button>
    </div>
  );
}
