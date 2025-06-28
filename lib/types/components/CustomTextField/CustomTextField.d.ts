interface CustomTextFieldProps {
    label: string;
    value: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const CustomTextField: React.FC<CustomTextFieldProps>;
export default CustomTextField;
