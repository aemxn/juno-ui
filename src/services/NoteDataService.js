import Axios from '../http';

const ENDPOINT = "notes";
const ROOT = `${ENDPOINT}`;
const ALL_NOTES = `${ENDPOINT}/all`;

class NoteDataService {
  getAllNotes() {
    return Axios.get(ALL_NOTES);
  }

  getNoteById(id) {
    return Axios.get(`${ROOT}/${id}`);
  }

  create(note) {
    return Axios.post(`${ENDPOINT}/`, note);
  }

  update(id, note) {
    return Axios.put(`${ROOT}/${id}`, note);
  }
}

export default new NoteDataService();