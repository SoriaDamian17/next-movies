export default ({ Title, Poster}) => {
    return (
        <div className="card">
            <div className="card-img"></div>
            <div className="card-title">{Title}</div>
            <style jsx>{`
                .card {
                    height: 300px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                }
                .card-title {
                    text-align: center;
                    width: 100%;
                    opacity: 0.9;
                    background: black;
                    color: white;
                    font-size: 17px;
                }
                .card-img {
                    flex: 1;
                    background-image: url(${Poster});
                    background-size: cover;
                    background-color: black;
                }
            `}
            </style>
        </div>
    )
}