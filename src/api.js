import axios from 'axios';


const url = 'http://ubeat.herokuapp.com/unsecure';
const urlv2 = 'http://ubeat.herokuapp.com';
const tokenTemp = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1Y2FjYTBhZDg1ZGQwMTAwMDRmMTBhYmMiLCJleHAiOjE1NTQ5MDM4OTI4ODJ9.siKK-93s75Ia-PXVIMA0o9Nd4YMuJfdzRXjNYtegZeE';

/* export async function getAlbum(idAlbum) {
  const urlAlbum = `${url}/albums/${idAlbum}`;
  const response = await fetch(urlAlbum);
  const json = await response.json();
  return {
    artistName: json.results[0].artistName,
    primaryGenreName: json.results[0].primaryGenreName,
    collectionName: json.results[0].collectionName,
    copyright: json.results[0].copyright,
    releaseDate: json.results[0].releaseDate,
    collectionViewUrl: json.results[0].collectionViewUrl,
    artworkUrl100: json.results[0].artworkUrl100,
  };
} */
export function getAlbum(idAlbum) {
  const result = axios
    .get(`${url}/albums/${idAlbum}`)
    .then(response => (response.data.results))
    .catch(error => console.log(error));
  return result;
}

/* export async function getArtist(idArtist) {
  const urlArtist = `${url}/artists/${idArtist}`;
  const response = await fetch(urlArtist);
  const json = await response.json();
  return {
    artistName: json.results[0].artistName,
    artistLinkUrl: json.results[0].artistLinkUrl,
    artistId: json.results[0].artistId,
    primaryGenreName: json.results[0].primaryGenreName,
  };
} */

export function getArtist(idArtist) {
  const result = axios
    .get(`${url}/artists/${idArtist}`)
    .then(response => (response.data));
  return result;
}

/* export async function getTracks(idAlbum) {
  const urlTracks = `${url}/albums/${idAlbum}/tracks`;
  const response = await fetch(urlTracks);
  const json = await response.json();
  return {
    tracks: json.results.map(track => ({
      trackId: track.trackId,
      trackCensoredName: track.trackCensoredName,
      trackTimeMillis: track.trackTimeMillis,
      previewUrl: track.previewUrl,
    }))

  };
} */
export function getTracks(idAlbum) {
  const result = axios
    .get(`${url}/albums/${idAlbum}/tracks`)
    .then(response => (response.data.results));
  return result;
}
/* export async function getArtistAlbums(idArtist) {
  const urlalbumsArtist = `${url}/artists/${idArtist}/albums`;
  const response = await fetch(urlalbumsArtist);
  const result = await response.json();
  return {
    albumArtists: result.results.map(item => ({
      collectionId: item.collectionId,
      artistName: item.artistName,
      collectionName: item.collectionName,
      artworkUrl100: item.artworkUrl100,
    }))
  }; */

export function getArtistAlbums(idArtist) {
  const result = axios
    .get(`${url}/artists/${idArtist}/albums`)
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
    .get(`${url}/playlists`)
    .then(response => (response.data))
    .catch(error => console.log(error));
  return result;
}
export function createPlayList(dataName, dataOwner) {
  const result = axios
    .post(`${url}/playlists`, { name: dataName, owner: dataOwner })
    .then(response => (
      response.data
    ));
  return result;
}
export function getPlaylistById(id) {
  const result = axios
    .get(`${url}/playlists/${id}`)
    .then(response => (response.data));
  return result;
}

export function deletePlaylist(idPlaylist) {
  const result = axios
    .delete(`${url}/playlists/${idPlaylist}`)
    .then(response => (response));
  return result;
}
export function deleteTrackInPlayList(idPlaylist, idTrack) {
  const result = axios
    .delete(`${url}/playlists/${idPlaylist}/tracks/${idTrack}`)
    .then(response => (response));
  return result;
}
export function postTrackInPlaylist(idPlaylist, track) {
  const result = axios
    .post(`${url}/playlists/${idPlaylist}/tracks`, track)
    .then(response => (response));
  return result;
}
export function putEditNamePlayList(playlist, newName) {
  const result = axios
    .put(`${url}/playlists/${playlist.id}`, { name: newName, owner: playlist.owner.email })
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
  const config = { headers: { Authorization: `Bearer ${tokenTemp}` } };
  const result = axios
    .get(`${urlv2}/users/${idUser}`, config)
    .then(response => (response))
    .catch(error => console.error(error));
  return result;
}

export function postFollow(idUserFollow) {
  const result = axios
    .post(`${urlv2}/follow`, { id: idUserFollow }, { Authorization: tokenTemp })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function deleteFollow(idUserFollow) {
  const result = axios
    .delete(`${urlv2}/follow/${idUserFollow}`, { Authorization: tokenTemp })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

export function getTokenInfo() {
  const result = axios
    .get(`${urlv2}/gokenInfo`, { Authorization: tokenTemp })
    .then(response => (response.data))
    .catch(error => console.error(error));
  return result;
}

/* export function postlogin(userEmail, userPassword) {
  const value = { email: userEmail, password: userPassword };
  /* const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  const result = axios
    .post(`${urlv2}/login`, value)
    .get(response => (response))
    .catch(error => (console.log(error)));
  return result;
} */

export function getBioFromArtist(artistName) {
  const result = axios
    .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=206a3a65c3a609d1189d6b69e4982b43&format=json`)
    .then(response => (response.data))
    .catch(error => (console.log(error)));
  return result;
}
