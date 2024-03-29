
export class Movie {
    popularity: number;
    // tslint:disable-next-line: variable-name
    vote_count: number;
    video: boolean;
    // tslint:disable-next-line: variable-name
    poster_path: string;
    id: number;
    character?: string;
    adult: boolean;
    // tslint:disable-next-line: variable-name
    backdrop_path?: string;
    // tslint:disable-next-line: variable-name
    original_language: string;
    // tslint:disable-next-line: variable-name
    original_title: string;
    // tslint:disable-next-line: variable-name
    original_name?: string;
    genre_ids: Array<number>;
    title: string;
    // tslint:disable-next-line: variable-name
    vote_average: number;
    overview: string;
    known_for?: Array<any>;
    // tslint:disable-next-line: variable-name
    release_date: string;
    // tslint:disable-next-line: variable-name
    media_type: string;
}
