import moment from 'moment';

export function dateFormat(timestamp) {
  return moment(timestamp).format('MMM-DD-YYYY:mma')
}