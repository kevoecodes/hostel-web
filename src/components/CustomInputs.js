import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { forwardRef } from 'react';

export const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(255) 000000000"
            definitions={{
                '#': /[1-9]/
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export const NumericFormatCustom = forwardRef(function NumericFormatCustom(props, ref) {
    const { onChange, max_float_value = 100000000, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value
                    }
                });
            }}
            thousandSeparator
            valueIsNumericString
            prefix="TZS "
            isAllowed={(values) => {
                const { floatValue } = values;
                return floatValue <= max_float_value; // Set maximum value here
            }}
        />
    );
});

NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
