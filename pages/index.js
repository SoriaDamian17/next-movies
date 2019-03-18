import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Movie from '../components/movie';
import axios from 'axios';

export default class extends React.Component {

    static async getInitialProps({ query }) {
        const page = query.page ? Number(query.page) : 1;
        const response = await axios.get(`http://www.omdbapi.com/?apikey=94949e42&s=batman&page=${page}`);
        const movies = response.data.Search;

        return { movies, page};
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Next Movies</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" />
                </Head>
                <Header></Header>
                <div>
                    <div className="movies">
                    { this.props.movies.map((p) => <Movie  {...p} />) }
                    <style>{`
                        .movies {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                        `}
                    </style>
                    </div>
                    { this.renderPagination() }
                </div>
            </div>
        )
    }

    renderPagination() {
        const previous = this.props.page > 1 ? <Link href={`/?pagina=${this.props.page - 1}`}><a>Anterior</a></Link> : null;
        
        return (
            <div className="control">
                { previous } | <Link href={`/?page=${this.props.page + 1}`}><a>Siguiente</a></Link>
                <style>{`
                 .control {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                 }
                `}</style>
            </div>
        )
    }
}