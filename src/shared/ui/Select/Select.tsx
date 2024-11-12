import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';

import ArrowIcon from '@/shared/assets/icons/arrow-icon.svg';
import { cls } from '@/shared/lib/cls';

import styles from './Select.module.scss';

interface SelectItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface SelectProps<T extends string> {
    className?: string;
    items?: SelectItem<T>[];
    currentValue?: string;
    defaultValue?: string;
    onChange: (value: T) => void;
    variant?: 'normal' | 'inversion';
    direction?: 'top' | 'bottom';
    label: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        items,
        currentValue,
        defaultValue,
        onChange,
        variant = 'normal',
        direction = 'bottom',
        label,
    } = props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === currentValue);
    }, [currentValue, items]);

    return (
        <div className={styles.selectWrapper}>
            <Text size="xs" color="gray">{label}</Text>
            <HListBox
                className={cls(styles.selectInner, {}, [className])}
                as="div"
                value={currentValue}
                onChange={onChange}
            >
                <HListBox.Button className={cls(styles.selectButton, {
                    [styles.openedToTop]: direction === 'top',
                }, [styles[variant]])}
                >
                    {({ open }) => (
                        <>
                            {selectedItem?.content ?? defaultValue}
                            <Icon
                                className={cls(styles.arrowIcon, { [styles.selectOpened]: open }, [])}
                                Svg={ArrowIcon}
                                width={12}
                                height={7}
                            />
                        </>
                    )}
                </HListBox.Button>

                <HListBox.Options
                    className={cls(styles.selectOptions, {}, [styles[direction]])}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.value === currentValue}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={cls(styles.selectOption, {
                                        [styles.selectOptionHovered]: active,
                                        [styles.selectOptionDisabled]: item.disabled,
                                        [styles.selectOptionCurrent]: selected,
                                    }, [])}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </div>
    );
};
