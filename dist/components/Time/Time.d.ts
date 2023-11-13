interface IProps {
    className?: string;
    date: Date | number;
    format: string;
    options?: {
        locale?: Locale;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: number;
        useAdditionalWeekYearTokens?: boolean;
        useAdditionalDayOfYearTokens?: boolean;
    };
}
export declare const Time: ({ className, date, format, options }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
