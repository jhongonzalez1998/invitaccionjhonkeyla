import rsvp from '../lib/rsvp.mjs';
export default { fetch(request) { return rsvp.fetch(request, process.env); } };
