import axios from 'axios';
import jscookie from 'js-cookie';


const url = 'http://ubeat.herokuapp.com';
const urlv2 = 'http://ubeat.herokuapp.com';
const tokenTemp = jscookie.get('token');


export function getAlbum(idAlbum) {
  console.log(tokenTemp);
  const result = axios
    .get(`${url}/albums/${idAlbum}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data.results))
    .catch(error => console.log(error));
  return result;
}

export function getArtist(idArtist) {
  const result = axios
    .get(`${url}/artists/${idArtist}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data));
  return result;
}

export function getTracks(idAlbum) {
  const result = axios
    .get(`${url}/albums/${idAlbum}/tracks`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data.results));
  return result;
}

export function getArtistAlbums(idArtist) {
  const result = axios
    .get(`${url}/artists/${idArtist}/albums`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data));
  return result;
}

export async function getArtistSearched(artist) {
  const urlArtist = `${url}/search/artists?q=${artist}`;
  const response = await fetch(urlArtist);
  const result = await response.json();
  return result.results.map(item => ({
    artistId: item.artistId,
    artistName: item.artistName,
    primaryGenreName: item.primaryGenreName,
  }));
}

export function getAllPlaylists() {
  const result = axios
    .get(`${url}/playlists`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data))
    .catch(error => console.log(error));
  return result;
}

export function createPlayList(dataName, dataOwner) {
  const result = axios
    .post(`${url}/playlists`, { name: dataName, owner: dataOwner }, { headers: { Authorization: tokenTemp } })
    .then(response => (
      response.data
    ));
  return result;
}

export function getPlaylistById(id) {
  const result = axios
    .get(`${url}/playlists/${id}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data))
    .catch(error => console.log(error));
  return result;
}

export function deletePlaylist(idPlaylist) {
  const result = axios
    .delete(`${url}/playlists/${idPlaylist}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response));
  return result;
}

export function deleteTrackInPlayList(idPlaylist, idTrack) {
  const result = axios
    .delete(`${url}/playlists/${idPlaylist}/tracks/${idTrack}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response));
  return result;
}

export function postTrackInPlaylist(idPlaylist, track) {
  const result = axios
    .post(`${url}/playlists/${idPlaylist}/tracks`, track, { headers: { Authorization: tokenTemp } })
    .then(response => (response));
  return result;
}

export function putEditNamePlayList(playlist, newName) {
  const result = axios
    .put(`${url}/playlists/${playlist.id}`, { name: newName, owner: playlist.owner.email }, { headers: { Authorization: tokenTemp } })
    .then(response => (response));
  return result;
}

export function getUsers() {
  const result = axios
    .get(`${urlv2}/users`, { Authorization: tokenTemp })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function getUsersbyId(idUser) {
  const config = { headers: { Authorization: tokenTemp } };
  const result = axios
    .get(`${url}/users/${idUser}`, config)
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function postFollow(idUserFollow) {
  const result = axios
    .post(`${url}/follow`, { id: idUserFollow }, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function deleteFollow(idUserFollow) {
  const result = axios
    .delete(`${url}/follow/${idUserFollow}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function getTokenInfo() {
  const result = axios
    .get(`${url}/tokenInfo`, { headers: { Authorization: tokenTemp } })
    .then(response => (response.data))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function postLogin(userEmail, userPassword) {
  const value = { email: userEmail, password: userPassword };
  const result = axios
    .post(`${url}/login`, value)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}
export function postSignUp(newName, newEmail, newPassword) {
  const result = axios
    .post(`${url}/signup`, { name: newName, email: newEmail, password: newPassword })
    .then(response => (response.data))
    .catch(error => ({ status: 401, err: error }));
  return result;
}

export function getBioFromArtist(artistName) {
  const result = axios
    .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=206a3a65c3a609d1189d6b69e4982b43&format=json`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}

export async function filterplaylistByUserId(userId) {
  let data = await getAllPlaylists();
  data = data.filter(e => e.owner.id === userId);
  return data;
}

export async function checkIfCookieIsAlive() {
  if (tokenTemp !== 'undefined') return true;
  return false;
}
