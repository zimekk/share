import React, { useState } from "react";

export function Json({ children }: { children: object }) {
  const [expand, setExpand] = useState(false);

  return (
    <pre>
      {expand ? (
        JSON.stringify(children, null, 2)
      ) : (
        <>
          [
          <a
            href="#"
            onClick={(event) => (event.preventDefault(), setExpand(true))}
          >
            ...
          </a>
          ]
        </>
      )}
    </pre>
  );
}
