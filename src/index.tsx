import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден, и react приложение не может быть вмонтировано!');
}
const root = createRoot(container);

root.render(<h1>Hello!!!!</h1>);
