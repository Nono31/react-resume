
export function getFormattedDateTime(d = new Date(), options= { month: 'long', year: 'numeric' }) {
  let date = new Date(d);
  return date.toLocaleDateString('en-EN', options);
}


