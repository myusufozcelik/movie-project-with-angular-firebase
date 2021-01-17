// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  picturePath: '../../../assets/img/menu',
  apiKeyTmdb: '1809a55509c3d4f7842300e2a5529fbb',
  apiKeyOmdb: '5bf6e8dc',
  detailOmdbMovies: 'https://www.omdbapi.com/?i=',
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=1809a55509c3d4f7842300e2a5529fbb&language=tr&page=1`,
  nowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=1809a55509c3d4f7842300e2a5529fbb&language=tr&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=1809a55509c3d4f7842300e2a5529fbb&language=tr&page=1`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=1809a55509c3d4f7842300e2a5529fbb&language=tr&page=1`,
  detailMovies: 'https://api.themoviedb.org/3/movie'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
