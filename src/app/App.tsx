import {
    memo, Suspense, useCallback, useState,
} from 'react';
import { Link } from 'react-router-dom';

import { AppRouter } from './providers/Router';
import { AppWithTheme } from './providers/ThemeProvider';

import { AppRoutesPaths } from '@/shared/const/routerConsts';
import { useTheme } from '@/shared/hooks/useTheme';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { cls } from '@/shared/lib/cls';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Select } from '@/shared/ui/Select';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Navbar } from '@/widgets/navbar';

const items = [
    {
        value: 'A',
        content: 'Доходы',
    },
    {
        value: 'B',
        content: 'Расходы',
    },
    {
        value: 'D',
        content: 'Расходы',
    },
    {
        value: 'C',
        content: 'Расходы',
    },
    {
        value: 'E',
        content: 'Расходы',
    },
];

const Balance = () => {
    return (
        <VStack>
            <Text as="h1" size="xxl" color="heading">
                Мой баланс:
            </Text>
            <Text size="big" color="green">153 170 ₽</Text>
        </VStack>
    );
};

const History = () => {
    const [visible, setVisible] = useState(false);

    const onClickVisible = useCallback(() => {
        setVisible((prev) => !prev);
    }, []);

    return (
        <Card>
            <VStack>
                {/* {visible && ( */}
                {/*    <> */}
                {/*        <Text size="xs" color="gray">Новая категория xs</Text> */}
                {/*        <Text size="s" color="gray">Новая категория s</Text> */}
                {/*        <Text size="m" color="grayAccent">Новая категория m</Text> */}
                {/*        <Text size="mBold" color="gray">Новая категория mBold</Text> */}
                {/*        <Text size="l" color="grayAccent">Новая категория l</Text> */}
                {/*        <Input */}
                {/*            label="Тип" */}
                {/*            placeholder="fsdfsadfasdf" */}
                {/*        /> */}
                {/*    </> */}
                {/* )} */}
                <div style={{
                    height: visible ? '100px' : '20px',
                    background: '#ffffff',
                    width: '100%',
                    transition: 'all 0.4s cubic-bezier(0.990, -0.020, 0.115, 1.460)',
                }}
                />
                <Select
                    onChange={() => {}}
                    label="Категория"
                    items={items}
                    currentValue="A"
                    variant="inversion"
                />
                <Link to={AppRoutesPaths.home()}>Home</Link>
                <Link to={AppRoutesPaths.analytics()}>Analytics</Link>
                <Button onClick={onClickVisible}>{visible ? 'Закрыть' : 'Открыть'}</Button>
            </VStack>
        </Card>
    );
};

const Managements = () => {
    const [visible, setVisible] = useState(false);

    const onClickVisible = useCallback(() => {
        setVisible((prev) => !prev);
    }, []);
    return (
        <VStack>
            <Text as="h2" size="xl" color="heading">Новая категория</Text>
            <Button onClick={onClickVisible}>{visible ? 'Закрыть' : 'Открыть'}</Button>
            <Select
                onChange={() => {}}
                label="Категория"
                items={items}
                currentValue="A"
                direction="top"
            />
            <Select
                onChange={() => {}}
                label="Категория"
                items={items}
                currentValue="A"
                direction="top"
            />
            <Select
                onChange={() => {}}
                label="Категория"
                items={items}
                currentValue="A"
                direction="top"
            />
            <Select
                onChange={() => {}}
                label="Категория"
                items={items}
                currentValue="A"
                direction="top"
            />
            <Select
                onChange={() => {}}
                label="Категория"
                items={items}
                currentValue="A"
                direction="top"
            />
            <Select
                onChange={() => {}}
                label="Категория"
                items={items}
                currentValue="A"
                direction="top"
            />
            {visible && (
                <>
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                    <Select
                        onChange={() => {}}
                        label="Категория"
                        items={items}
                        currentValue="A"
                        direction="top"
                    />
                </>
            )}
        </VStack>
    );
};

const App = memo(() => {
    const { theme } = useTheme();

    return (
        <div className={cls('app', {}, [theme])}>
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    balance={<Balance />}
                    history={<History />}
                    managements={<AppRouter />}
                />
            </Suspense>
        </div>
    );
});

export default AppWithTheme(App);
