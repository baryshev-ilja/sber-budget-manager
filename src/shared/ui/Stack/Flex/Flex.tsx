import { ReactNode } from 'react';

import { cls } from '@/shared/lib/cls';
import type { AdditionalCls, Mods } from '@/shared/lib/cls';

import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = 1 | 2 | 3 | 5 | 10 | 11 | 12 | 13 | 15 | 20 | 24 | 30 | 40;

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    1: styles.gap1,
    2: styles.gap2,
    3: styles.gap3,
    5: styles.gap5,
    10: styles.gap10,
    11: styles.gap11,
    12: styles.gap12,
    13: styles.gap13,
    15: styles.gap15,
    20: styles.gap20,
    24: styles.gap24,
    30: styles.gap30,
    40: styles.gap40,
};

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    max?: boolean;
    gap?: FlexGap;
    'data-testid'?: string;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align,
        direction = 'row',
        max,
        gap,
        'data-testid': dataTestId = '',
    } = props;

    const modsCls: Mods = {
        [styles.max]: max,
    };

    const additionalCls: AdditionalCls = [
        className,
        justifyClasses[justify],
        align && alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return (
        <div
            className={cls(styles.flexContainer, modsCls, additionalCls)}
            data-testid={dataTestId}
        >
            {children}
        </div>
    );
};
