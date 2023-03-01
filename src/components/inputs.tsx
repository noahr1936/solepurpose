import { useField } from "formik";
import { FunctionComponent } from "react";

interface TextProps {
    id?: string;
    name: string;
    type: string;
    placeholder: string;
    label?: string;
    className?: string;
}

interface NumberProps {
    step: string;
    min?: number;
    id?: string;
    name: string;
    placeholder?: string;
    label?: string;
    className?: string;
}

interface SelectProps {
    id?: string;
    name: string;
    label: string;
    className?: string;
}

export const MyTextInput: FunctionComponent<TextProps> = (props) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]

    // which we can spread on <input>. We can use field meta to show an error

    // message if the field is invalid and it has been touched (i.e. visited)

    const [field, meta] = useField(props);

    return (
        <>
            <label className="form-label" htmlFor={props.id || props.name}>
                {props.label ?? props.placeholder}
            </label>

            <input className={props.className ?? "form-control"} {...field} {...props} />

            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};

export const MyNumberInput: FunctionComponent<NumberProps> = (props) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]

    // which we can spread on <input>. We can use field meta to show an error

    // message if the field is invalid and it has been touched (i.e. visited)

    const [field, meta] = useField(props);

    return (
        <>
            <label className="form-label" htmlFor={props.id || props.name}>
                {props.label ?? props.placeholder}
            </label>

            <input
                min={props.min ?? 0}
                type="number"
                className={props.className ?? "form-control"}
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};

export const MySelect: FunctionComponent<SelectProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label className="form-label" htmlFor={props.id || props.name}>
                {label}
            </label>

            <select className={props.className ?? "form-select"} {...field} {...props} />

            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
    );
};
