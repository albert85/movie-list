import { ButtonWrapper } from './style';

const CustomButton = ({
  label = '',
  color = 'white',
  height = '40px',
  bgColor = 'blue',
  ...rest
}) => {
  return (
    <ButtonWrapper
    color={color}
    height={height}
    bgColor={bgColor}
    {...rest}>
      {label}
    </ButtonWrapper>
  );
};

export default CustomButton;
