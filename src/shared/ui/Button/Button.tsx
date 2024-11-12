import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import type { AdditionalCls, Mods } from '@/shared/lib/cls';
import { cls } from '@/shared/lib/cls';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'primary' | 'clear' | 'outline';
    disabled?: boolean;
    onlyIcon?: boolean;
    children: ReactNode;
    buttonWidth?: string | number;
    'data-testid'?: string;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        variant = 'primary',
        buttonWidth,
        disabled,
        onlyIcon,
        children,
        'data-testid': dataTestId = '',
        ...otherProps
    } = props;

    const HTMLStyles: CSSProperties = {
        width: buttonWidth,
    };

    const modsCls: Mods = {
        [styles.onlyIcon]: onlyIcon,
        [styles.disabled]: disabled,
    };

    const additionalCls: AdditionalCls = [
        className,
        styles[variant],
    ];

    return (
        <button
            data-testid={dataTestId}
            type="button"
            style={HTMLStyles}
            className={cls(styles.button, modsCls, additionalCls)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
