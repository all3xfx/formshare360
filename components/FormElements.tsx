import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ReactElement;
    label: string;
  };

  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributed?: Record<string, any>;
};

type FormELementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormELementsType = {
  TextField: TextFieldFormElement,
};
