interface IProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  label,
  ...props
}: IProps) => {
  return (
    <button
      type="button"
      style={{backgroundColor}}
      {...props}
    >
      {label}
    </button>
  );
};
