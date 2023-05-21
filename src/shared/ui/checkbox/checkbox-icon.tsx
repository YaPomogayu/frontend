interface DefaultCheckboxIconProps {
  color?: string;
}

export const DefaultCheckboxIcon = ({
  color = "var(--colors-interface-background)",
  ...props
}: DefaultCheckboxIconProps) => (
  <svg
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.7071 1.70711C13.0976 1.31658 13.0976 0.683417 12.7071 0.292893C12.3166 -0.0976311 11.6834 -0.0976311 11.2929 0.292893L4.5 7.08579L1.70711 4.29289C1.31658 3.90237 0.683417 3.90237 0.292893 4.29289C-0.097631 4.68342 -0.097631 5.31658 0.292893 5.70711L3.79289 9.20711C4.18342 9.59763 4.81658 9.59763 5.20711 9.20711L12.7071 1.70711Z"
      fill={color}
    />
  </svg>
);
