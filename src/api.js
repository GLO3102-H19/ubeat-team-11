const axios = require('axios');
const jscookie = require('js-cookie');
const qs = require('qs');

const axiosLastFm = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0',
});

axios.defaults.baseURL = 'http://ubeat.herokuapp.com';
axios.defaults.headers.common.Authorization = jscookie.get('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// const lastFmUrl = 'http://ws.audioscrobbler.com/2.0/?method=';
const apikey = '&limit=10&api_key=206a3a65c3a609d1189d6b69e4982b43&format=json';

export function getAlbum(idAlbum) {
  const result = axios
    .get(`/albums/${idAlbum}`)
    .then(response => (response.data.results))
    .catch(error => console.log(error));
  return result;
}

export function getArtist(idArtist) {
  const result = axios
    .get(`/artists/${idArtist}`)
    .then(response => (response.data));
  return result;
}

export function getTracks(idAlbum) {
  const result = axios
    .get(`/albums/${idAlbum}/tracks`)
    .then(response => (response.data.results));
  return result;
}

export function getArtistAlbums(idArtist) {
  const result = axios
    .get(`/artists/${idArtist}/albums`)
    .then(response => (response));
  return result;
}

export function getAllPlaylists() {
  const result = axios
    .get('/playlists')
    .then(response => (response))
    .catch(error => console.log(error));
  return result;
}

export function createPlayList(dataName, dataOwner) {
  const result = axios
    .post('/playlists', { name: dataName, owner: dataOwner })
    .then(response => (
      response.data
    ));
  return result;
}

export function getPlaylistById(id) {
  const result = axios
    .get(`/playlists/${id}`)
    .then(response => (response.data))
    .catch(error => console.log(error));
  return result;
}

export function deletePlaylist(idPlaylist) {
  const result = axios
    .delete(`/playlists/${idPlaylist}`)
    .then(response => (response));
  return result;
}

export function deleteTrackInPlayList(idPlaylist, idTrack) {
  const result = axios
    .delete(`/playlists/${idPlaylist}/tracks/${idTrack}`)
    .then(response => (response));
  return result;
}

export function postTrackInPlaylist(idPlaylist, track) {
  const result = axios
    .post(`/playlists/${idPlaylist}/tracks`, track)
    .then(response => (response));
  return result;
}

export function putEditNamePlayList(playlist, newName) {
  const result = axios
    .put(`/playlists/${playlist.id}`, { name: newName, owner: playlist.owner.email })
    .then(response => (response));
  return result;
}

export function getUsers() {
  const result = axios
    .get('/users')
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function getUsersbyId(userId) {
  const result = axios
    .get(`/users/${userId}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function postFollow(idUserFollow) {
  console.log(idUserFollow);
  const result = axios
    .post('/follow', { id: idUserFollow })
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function deleteFollow(idUserFollow) {
  const result = axios
    .delete(`/follow/${idUserFollow}`)
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function getTokenInfo() {
  const result = axios
    .get('/tokenInfo')
    .then(response => (response))
    .catch(error => console.error(error));
  return result;
}
export function logOut() {
  axios.defaults.headers.common.Authorization = '';
  jscookie.remove('token');
}

export function postLogin(userEmail, userPassword) {
  const value = { email: userEmail, password: userPassword };
  const result = axios
    .post('/login', value)
    .then((response) => {
      jscookie.set('token', response.data.token);
      axios.defaults.headers.common.Authorization = response.data.token;
      return response;
    })
    .catch(error => ({ status: 400, err: error }));
  return result;
}
export function postSignUp(newName, newEmail, newPassword) {
  const result = axios
    .post('/signup', qs.stringify({ name: newName, email: newEmail, password: newPassword }))
    .then(response => (response))
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
      return error.response.status;
    });
  return result;
}

export function getBioFromArtist(artistName) {
  const result = axiosLastFm
   .get(`?method=artist.getinfo&artist=${artistName}${apikey}`)
    .then(response => (response.data))
    .catch(error => console.error(error));
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
    .get(`/users/:${id}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function albumSearched(album) {
  const result = axios
    .get(`/search/albums?q=${album}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function artistSearched(artist) {
  const result = axios
    .get(`/search/artists?q=${artist}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function globalSearched(name) {
  const result = axios
    .get(`/search/?q=${name}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function trackSearched(track) {
  const result = axios
    .get(`/search/tracks?q=${track}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function userSearched(name) {
  const result = axios
    .get(`/search/users?q=${name}`)
    .then(response => (response))
    .catch(error => ({ status: 400, err: error }));
  return result;
}

export function getTopArtistGeo() {
  const result = axiosLastFm
    .get(`/?method=geo.gettopartists&country=canada${apikey}`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}

export function getTopAlbumByArtist(artistName) {
  const result = axiosLastFm
    .get(`/?method=artist.gettopalbums&artist=${artistName}${apikey}`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}
