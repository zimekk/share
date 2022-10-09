import React, { Suspense, useEffect, useRef, useState } from "react";
import { createAsset } from "use-asset";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "../Spinner";
import cx from "classnames";
import styles from "./styles.module.scss";

const imgSrcFallback = () =>
  (({ icon: [w, h, , , d] }) =>
    `data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><path fill="currentColor" d="${d}"></path></svg>`)(
    faImage
  );

const image = createAsset(
  async (src): Promise<string> =>
    new Promise((resolve) => {
      const img = new Image();
      Object.assign(img, {
        onload: () => resolve(src),
        onerror: () => resolve(imgSrcFallback()),
        src,
      });
    })
);

function Img({ src, ...props }: { src: string; srcSet?: string }) {
  const img = image.read(src);
  return <img src={img} {...props} referrerPolicy="no-referrer" />;
}

function Loader() {
  return (
    <div className={styles.Loader}>
      <Spinner />
    </div>
  );
}

export function Artwork({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserve: IntersectionObserverCallback = ([
      { isIntersecting },
    ]) => {
      if (isIntersecting) {
        setInView(true);
      }
    };
    if (ref.current instanceof HTMLElement) {
      const observer = new IntersectionObserver(handleObserve, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });
      observer.observe(ref.current);
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);

  return (
    <div ref={ref} className={cx(className, styles.Artwork)}>
      {inView && (
        <Suspense fallback={<Loader />}>
          <Img src={src} />
        </Suspense>
      )}
    </div>
  );
}
