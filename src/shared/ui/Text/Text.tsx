import { ReactNode } from 'react';

import { cls } from '@/shared/lib/cls';
import type { AdditionalCls } from '@/shared/lib/cls';

import styles from './Text.module.scss';

type TextColor = 'heading' | 'white' | 'green' | 'red' | 'gray' | 'grayAccent';
type TextSize = 'xs' | 's' | 'm' | 'mBold' | 'l' | 'xl' | 'xxl' | 'big';

interface TextProps {
    className?: string;
    color?: TextColor;
    size?: TextSize;
    as?: 'p' | 'span' | 'h1' | 'h2';
    children: ReactNode;
}

export const Text = (props: TextProps) => {
    const {
        className,
        color = 'grayLight',
        size = 's',
        as = 'span',
        children,
    } = props;

    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    const additionalCls: AdditionalCls = [
        className,
        styles[size],
        styles[color],
    ];

    return (
        <Tag className={cls(styles.text, {}, additionalCls)}>
            {children}
        </Tag>
    );
};
