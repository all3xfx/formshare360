"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributed: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeholder: "Value here....",
    },
  }),

  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },

  designerComponent: () => <div>Designer component</div>,
  formComponent: () => <div>form component</div>,
  propertiesComponent: () => <div>properties component</div>,
};
