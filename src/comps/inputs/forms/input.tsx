import React, { ChangeEventHandler } from "react";
import styles from "./styles.module.scss";

interface Props {
  label: string;
  sublabel?: string;
  name: string;
  value?: string;
  id?: string;
  placeholder?: string;
  // onCange?: React.ChangeEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputText(props: Props): JSX.Element {
  const { id, label, name, value, placeholder, onChange, sublabel } = props;
  return (
    <div className={styles.input_box_text}>
      <label htmlFor={name} className="label">
        {label}
        <span>{sublabel}</span>
      </label>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function InputNumber(props: Props): JSX.Element {
  const { id, label, name, value, placeholder, onChange } = props;
  return (
    <div className={styles.input_box_number}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange}
      />
    </div>
  );
}

export function Seperator() {
  return <hr className={styles.hr} />;
}

interface IButton {
  name: string;
}

export function InputButton(props: IButton): JSX.Element {
  const { name } = props;
  return <input className={styles.btn} value={name} type="button" />;
}
