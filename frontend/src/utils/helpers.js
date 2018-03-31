import moment from 'moment';

export function dateFormat(timestamp) {
  return moment(timestamp).format('MMM-DD-YYYY, h:mm:ss a')
}