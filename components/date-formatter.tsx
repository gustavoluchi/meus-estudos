import {format, parseISO} from 'date-fns';

type Props = {
  dateString: string;
};

const DateFormatter = ({dateString}: Props) => {
  const date = format(parseISO(dateString), 'dd/MM/yyyy');
  return <>{date}</>;
};

export default DateFormatter;
