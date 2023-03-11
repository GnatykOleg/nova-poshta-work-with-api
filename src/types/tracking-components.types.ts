export type EventOnChange = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type EventOnSubmit = React.FormEvent<HTMLFormElement>;

export interface ITrackingFormProps {
  onChange: (event: EventOnChange) => void;
  billOfLading: string;
  submitForm: (event: EventOnSubmit) => void;
}

export interface ITrackingStoryProps {
  onClick: (billOfLading: string) => void;
}
