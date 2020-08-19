import React from 'react';
import classNames from 'classnames';
import CheckboxIcon from '../../assets/icons/CheckboxIcon';
import styles from './Checkbox.module.scss';

const CheckBox = ({ checked, onChange, labelText, disabled = false }) => (
	<label className={classNames(styles.checkbox)}>
		<input type='checkbox' className={styles.input} checked={checked} disabled={disabled} onChange={onChange} />
		<span className={styles.icon}>
			<CheckboxIcon isChecked={checked} isDisabled={disabled} />
		</span>
		{labelText && <span className={styles.labelText}>{labelText}</span>}
	</label>
);

export default CheckBox;
