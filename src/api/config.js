import axios from "axios";

/**
 * URL to the server with which the front end communicates.
 * Removes the need of copy pasting entire URLs for stuff.
 * Don't put '/' at the end.
 */
export default axios.create({
    baseURL: 'http://localhost:8888/api'
});