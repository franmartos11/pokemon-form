import React, { useContext, useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({
  name,
  label,
  type = "text",
  shouldFocus = false,
  isPokemon = false,
}) => {
  const ref = useRef();

  const { handleInputBlur, formulario } = useContext(ContextoFormulario);

  const [value, setValue] = useState(formulario[name] || "");

  
  const onChange = (e) => setValue(e.target.value);

 
  const onBlur = (e) => {
    e.preventDefault();

    handleInputBlur(
      isPokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR",
      {
        campo: name,
        valor: value,
      }
    );
  };

  useEffect(() => {
    if (ref.current && shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string,
  shouldFocus: propTypes.bool,
  isPokemon: propTypes.bool,
};

export default Input;
