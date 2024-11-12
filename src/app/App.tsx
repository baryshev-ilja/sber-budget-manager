import { memo } from 'react';

import { AppWithTheme } from './providers/ThemeProvider';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
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

const App = memo(() => {
    return (
        <div className="app">
            <Navbar />
            <div className="container" style={{ flexDirection: 'column' }}>
                <Text as="h1" size="xxl" color="heading">
                    Мой баланс:
                </Text>
                <Text size="big" color="green">23 120 000 ₽</Text>
                <Text as="h2" size="xl" color="heading">Новая категория</Text>
                <Card>
                    <VStack>
                        <Text size="xs" color="gray">Новая категория xs</Text>
                        <Text size="s" color="gray">Новая категория s</Text>
                        <Text size="m" color="grayAccent">Новая категория m</Text>
                        <Text size="mBold" color="gray">Новая категория mBold</Text>
                        <Text size="l" color="grayAccent">Новая категория l</Text>
                        <Input
                            label="Тип"
                            placeholder="fsdfsadfasdf"
                        />
                        <Select
                            onChange={() => {}}
                            label="Категория"
                            items={items}
                            currentValue="A"
                            variant="inversion"
                        />
                    </VStack>
                </Card>
                <Select
                    onChange={() => {}}
                    label="Категория"
                    items={items}
                    currentValue="A"
                    direction="top"
                />
            </div>
        </div>
    );
});

export default AppWithTheme(App);
