import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { ContainerInput } from "./styles";

interface InputComponent extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputComponent> = ({ name, icon: Icon, ...settins }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handlleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handlleInputBlur = useCallback(() => {
    setIsFocus(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  return (
    <ContainerInput isField={isField} isFocus={isFocus}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handlleInputFocus}
        onBlur={handlleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...settins}
      />
    </ContainerInput>
  );
};

export default Input;
