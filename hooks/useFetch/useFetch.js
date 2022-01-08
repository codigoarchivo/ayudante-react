import React from "react";

export const useFetch = (url) => {
  const [states, setStates] = React.useState({
    data: null,
    loading: true,
    error: null,
  });
  
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      setStates({
        data: null,
        loading: true,
        error: null,
      });
    }
  
    // setTimeout(() => {
    // if (isMounted.current) {
    //   setStates({
    //     data: null,
    //     loading: true,
    //     error: null,
    //   });
    // } else {
    //   console.log("setStates no se llamo");
    // }
    // }, 4000);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStates({
          data,
          loading: false,
          error: null,
        });
      })
      .catch(() =>
        setStates({
          data: null,
          loading: true,
          error: "No se pudo cargar",
        })
      );
  }, [url]);

  return states;
};
