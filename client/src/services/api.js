import axios from "axios";

export function getProjects() {
  return axios.get("http://localhost:3000/project");
}

export function addProject(payload) {
  return axios.post("http://localhost:3000/project", payload);
}

export function addLog(id, payload) {
  return axios.post("http://localhost:3000/project/log/" + id, payload);
}

export function getLogs() {
  return axios.get("http://localhost:3000/logs");
}
