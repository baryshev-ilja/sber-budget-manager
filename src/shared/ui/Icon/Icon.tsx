import { memo, SVGProps, VFC } from 'react';

import { cls } from '@/shared/lib/cls';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 17,
        height = 17,
        ...otherProps
    } = props;

    return (
        <Svg
            className={cls('', {}, [className])}
            width={width}
            height={height}
            {...otherProps}
        />
    );
});
