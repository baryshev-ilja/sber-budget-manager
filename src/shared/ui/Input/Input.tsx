import {
    ChangeEvent, InputHTMLAttributes, memo, useRef,
} from 'react';

import { VStack } from '../Stack';
import { Text } from '../Text';

import type { Mods } from '@/shared/lib/cls';
import { cls } from '@/shared/lib/cls';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    errorLabel?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        label,
        onChange,
        placeholder = '',
        errorLabel,
        ...otherProps
    } = props;

    const modsCls: Mods = {
        [styles.error]: errorLabel,
    };

    const labelValue = errorLabel || label;

    const refInput = useRef<HTMLInputElement>(null);

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    return (
        <VStack gap={5}>
            <Text
                color={errorLabel ? 'red' : 'gray'}
                size="xs"
            >
                {labelValue}
            </Text>
            <input
                ref={refInput}
                className={cls(styles.input, modsCls, [className])}
                value={value}
                onChange={onChangeHandler}
                disabled={Boolean(errorLabel)}
                placeholder={placeholder}
                {...otherProps}
            />
        </VStack>
    );
});
