import styles from "./FormControls.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.visited && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.visited && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

