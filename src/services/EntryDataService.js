import Axios from '../http';

const ENDPOINT = "entries";
const ROOT = `${ENDPOINT}`;
const LATEST = `${ENDPOINT}/latest`;
const EXPLORE = `${ENDPOINT}/explore`;
const GROUPBYYEAR = `${ENDPOINT}/groupByYear`;
const EXPORT = `${ENDPOINT}/export`;

class EntryDataService {
  getLatest() {
    return Axios.get(LATEST);
  }

  explore(params) {
    return Axios.get(EXPLORE, { params });
  }

  getEntryById(id) {
    return Axios.get(`${ROOT}/${id}`);
  }

  groupByYear() {
    return Axios.get(GROUPBYYEAR);
  }

  create(entry) {
    return Axios.post(`${ENDPOINT}/`, entry);
  }

  update(id, entry) {
    return Axios.put(`${ROOT}/${id}`, entry);
  }

  delete(id) {
      return Axios.delete(`${ROOT}/${id}`);
  }

  export() {
    return Axios.get(EXPORT);
  }
}

export default new EntryDataService();