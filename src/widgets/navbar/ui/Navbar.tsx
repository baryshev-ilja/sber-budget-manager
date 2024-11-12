import { cls } from '@/shared/lib/cls';
import { LogoApp } from '@/shared/ui/LogoApp';
import { HStack } from '@/shared/ui/Stack';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <header className={cls(styles.navbar, {}, [className])}>
            <div className="container">
                <HStack>
                    <LogoApp />
                </HStack>
            </div>
        </header>
    );
};
