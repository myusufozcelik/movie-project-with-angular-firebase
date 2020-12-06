import { Companies } from './companies.model';
import { Genres } from './genres.model';
export class Movies {
    adult: boolean;
    // tslint:disable-next-line: variable-name
    backdrop_path: string;
    budget?: number;
    genres?: Genres[];
    homepage?: string;
    id: number;
    // tslint:disable-next-line: variable-name
    imdb_id?: number;
    // tslint:disable-next-line: variable-name
    original_language: string;
    // tslint:disable-next-line: variable-name
    original_title: string;
    overview: string;
    popularity: number;
    // tslint:disable-next-line: variable-name
    poster_path: string;
    // tslint:disable-next-line: variable-name
    production_companies?: Companies[];
    // tslint:disable-next-line: variable-name
    production_countries?: any[];
    // tslint:disable-next-line: variable-name
    release_date: Date;
    revenue?: number;
    runtime?: number;
    // tslint:disable-next-line: variable-name
    spoken_languages?: any[];
    status?: string;
    tagline?: string;
    title: string;
    video: boolean;
    // tslint:disable-next-line: variable-name
    vote_average: number;
    // tslint:disable-next-line: variable-name
    vote_count: number;
}