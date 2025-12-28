import axios from 'axios';

export async function fetchEvents() {
  const { data } = await axios.get('/api/events');
  return data;
}

export async function fetchEvent(id) {
  const { data } = await axios.get(`/api/events/${id}`);
  return data;
}
