import './my-button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  inverted: 'inverted',
  google: 'google-sign-in',
};

const MyButton = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${
        BUTTON_TYPE_CLASSES.hasOwnProperty(buttonType)
          ? BUTTON_TYPE_CLASSES[buttonType]
          : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default MyButton;
