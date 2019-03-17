import millisToMinutesAndSeconds from './utility';

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
      trackNumber: track.trackNumber,
      trackCensoredName: track.trackCensoredName,
      trackTimeMillis: millisToMinutesAndSeconds(track.trackTimeMillis),
      previewUrl: track.previewUrl,
    }))

  };
}

