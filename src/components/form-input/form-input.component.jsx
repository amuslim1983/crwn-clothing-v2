import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      {label && (
        <>
          <input {...otherProps} className='form-input' />
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default FormInput;
