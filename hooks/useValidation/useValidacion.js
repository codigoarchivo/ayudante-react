import React from "react";

export const useValidacion = (stateInicial, validar, fn) => {
  const [valores, setValores] = React.useState(stateInicial);
  const [errores, setErrores] = React.useState({});
  const [submitForm, setSubmitForm] = React.useState(false);

  React.useEffect(() => {
    if (submitForm) {
      if (Object.keys(errores).length === 0) {
        fn(); // FN =  función que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, [errores]);

  // función que se ejecuta cuando el usuario hace cambios en el input

  const handleChange = ({ target }) => {
    setValores({
      ...valores,
      [target.name]: target.value,
    });
  };

  //  función que se ejecuta cuando el usuario hace submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidaciones = validar(valores);
    setErrores(erroresValidaciones);
    setSubmitForm(true);
  };

  return {
    valores,
    errores,
    handleSubmit,
    handleChange
  };
};
