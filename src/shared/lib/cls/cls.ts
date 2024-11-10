/**
 * Mods - Объект с перечислением {string: boolean/string/undefined}
 * Это классы (string), которые будут применяться только если их значение равно true
 */
export type Mods = Record<string, boolean | string | undefined>;

/**
 * AdditionalCls - Массив с перечислением (string) классов.
 * Это классы (string), которые будут применяться всегда, если они переданы
 */
export type AdditionalCls = Array<string | undefined>

/**
 * cls - Вспомогательная функция, которая собирает все переданные классы (styles, mods, additional),
 * обрабатывает их (фильтрует) и объединяет в одну строку с помощью метода join(' ')
 */
export function cls(styles: string, mods: Mods = {}, additional: AdditionalCls = []): string {
    return [
        styles,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
