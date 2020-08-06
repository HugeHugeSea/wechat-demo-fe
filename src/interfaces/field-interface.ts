export interface Validator {
  name: string;
  message: string;
  param?: any;
}

export interface ButtonConfig {
  type: string;
  name: string;
  label?: string;
  fieldClassName?: string;
}

export interface OnClickData {
  type: string;
  name: string;
  formData: any;
}

export interface FieldConfig {
  type: string;
  inputId: number;
  subType?: string;
  label?: string;
  name?: string;
  inputType?: string;
  inputClassName?: string;
  fieldClassName?: string;
  buttonOptions?: ButtonConfig[];
  options?: string[];
  collections?: any;
  readonly ?: boolean;
  value?: any;
  validations?: Validator[];
}
