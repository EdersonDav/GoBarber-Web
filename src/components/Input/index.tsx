import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { ContainerInput } from "./styles";

interface InputComponent extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputComponent> = ({ icon: Icon, ...settins }) => (
  <ContainerInput>
    {Icon && <Icon size={20} />}
    <input {...settins} />
  </ContainerInput>
);

export default Input;
