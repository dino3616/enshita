import type { ComponentProps } from "react";
import type {FieldError} from "react-hook-form";

export type TextInputProperties = ComponentProps<"input"> & {
  inputStyles?: string;
  error?: FieldError;
};

export type AreaInputProperties = ComponentProps<"textarea"> & {
  inputStyles?: string;
  error?: FieldError;
};

export type RadioInputProperties = Omit<ComponentProps<'input'>, 'id' | 'type'> & {
  inputStyles?: string;
  id: string;
  value: string
  name: string
  current: string
  total: string
  error?: FieldError
}
