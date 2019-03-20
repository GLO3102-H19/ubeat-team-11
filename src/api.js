import axios from 'axios';

const url = 'http://ubeat.herokuapp.com/unsecure';

export async function getAlbum(idAlbum) {
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
}

export async function getArtist(idArtist) {
  const urlArtist = `${url}/artists/${idArtist}`;
  const response = await fetch(urlArtist);
  const json = await response.json();
  return {
    artistName: json.results[0].artistName,
    artistLinkUrl: json.results[0].artistLinkUrl,
    artistId: json.results[0].artistId,
    primaryGenreName: json.results[0].primaryGenreName,
  };
}


export async function getTracks(idAlbum) {
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
}
export async function getArtistAlbums(idArtist) {
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

  };
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
