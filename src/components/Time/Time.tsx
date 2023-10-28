import React from "react";
import {format as dateFormat} from "date-fns";

interface IProps {
  className?: string;
  date: Date | number,
  format: string,
  options?: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: number
    useAdditionalWeekYearTokens?: boolean
    useAdditionalDayOfYearTokens?: boolean
  }
}

export const Time = ({className, date = new Date(), format = "yyyy-MM-dd", options}: IProps) => {
  return (
    <time
      className={className}
      title={String(date) || String(new Date())}
    >
      {dateFormat(date || new Date(), format, options)}
    </time>
  );
};