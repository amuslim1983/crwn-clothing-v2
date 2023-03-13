import './my-button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  inverted: 'inverted',
  google: 'google-sign-in',
};

const MyButton = ({ childern, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${
        BUTTON_TYPE_CLASSES.hasOwnProperty(buttonType)
          ? BUTTON_TYPE_CLASSES[buttonType]
          : ''
      }`}
      {...otherProps}
    >
      {childern}
    </button>
  );
};

export default MyButton;
