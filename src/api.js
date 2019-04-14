import axios from 'axios';
import jscookie from 'js-cookie';

const apiKey = '&limit=10&api_key=206a3a65c3a609d1189d6b69e4982b43&format=json';
let tokenTemp = jscookie.get('token');
const url = 'http://ubeat.herokuapp.com';
const urlInfo = 'http://ws.audioscrobbler.com/2.0/?method=';

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

export function getAllPlaylists() {
  const result = axios
    .get(`${url}/playlists`, { headers: { Authorization: jscookie.get('token') } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
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
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
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
    .get(`${url}/users`, { Authorization: tokenTemp })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function getUsersbyId(userId) {
  const config = { headers: { Authorization: tokenTemp } };
  const result = axios
    .get(`${url}/users/${userId}`, config)
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
  console.log(tokenTemp);
  const result = axios
    .get(`${url}/tokenInfo`, { headers: { Authorization: jscookie.get('token') } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}
export function logOut() {
  tokenTemp = '';
  jscookie.remove('token');
}

export function postLogin(userEmail, userPassword) {
  const value = { email: userEmail, password: userPassword };
  const result = axios
    .post(`${url}/login`, value)
    .then((response) => {
      jscookie.set('token', response.data.token);
      return response;
    })
    .catch(error => ({ status: 400, err: error }));
  return result;
}
export function postSignUp(newName, newEmail, newPassword) {
  const result = axios
    .post(`${url}/signup`, { name: newName, email: newEmail, password: newPassword })
    .then(response => (response))
    .catch(error => ({ status: 401, err: error }));
  return result;
}

export function getBioFromArtist(artistName) {
  const result = axios
    .get(`${urlInfo}artist.getinfo&artist=${artistName}${apiKey}`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}

export async function filterplaylistByUserId(userId) {
  let result = await getAllPlaylists();
  console.log(result);
  result = result.data.filter(e => e.owner.id === userId);
  return result;
}

export function checkIfCookieIsAlive() {
  console.log(typeof jscookie.get('token'));
  if (typeof jscookie.get('token') === 'undefined') {
    return false;
  }
  return true;
}
export function idUser(id) {
  const result = axios
    .get(`${url}/users/:${id}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function albumSearched(album) {
  const result = axios
    .get(`${url}/search/albums?q=${album}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function artistSearched(artist) {
  const result = axios
    .get(`${url}/search/artists?q=${artist}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function globalSearched(name) {
  const result = axios
    .get(`${url}/search/?q=${name}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function trackSearched(track) {
  const result = axios
    .get(`${url}/search/tracks?q=${track}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function userSearched(name) {
  const result = axios
    .get(`${url}/search/users?q=${name}`, { headers: { Authorization: tokenTemp } })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function getTopArtistGeo() {
  const result = axios
    .get(`${urlInfo}geo.gettopartists&country=canada${apiKey}`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}

export function getTopAlbumByArtist(artistName) {
  const result = axios
    .get(`${urlInfo}artist.gettopalbums&artist=${artistName}${apiKey}`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}
