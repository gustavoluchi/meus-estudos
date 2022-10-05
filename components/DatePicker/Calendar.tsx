import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import {createCalendar} from '@internationalized/date';
import {useCalendar} from '@react-aria/calendar';
import {useLocale} from '@react-aria/i18n';
import {useCalendarState} from '@react-stately/calendar';
import {useRef} from 'react';
import {CalendarButton} from './Button';
import {CalendarGrid} from './CalendarGrid';

export function Calendar(props: any) {
  let {locale} = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  let ref = useRef<HTMLDivElement>(null);
  let {calendarProps, prevButtonProps, nextButtonProps, title} = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <div className="flex items-center pb-4">
        <h2 className="flex-1 ml-2 text-xl font-bold">{title}</h2>
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="w-6 h-6" />
        </CalendarButton>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="w-6 h-6" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}
