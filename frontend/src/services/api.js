import axios from 'axios';

const API_URL = 'http://localhost:5000/api/candidates';

export const getCandidates = () => axios.get(API_URL);
export const addCandidate = (candidate) => axios.post(API_URL, candidate);
