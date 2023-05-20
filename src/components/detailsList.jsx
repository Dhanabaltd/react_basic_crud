import "./common.scss"

const DetailsList = ({ data, onDelete }) => {
    return (
        <>
            {data.map((datas, i) => (
                <div key={i}>
                    <div className="detailsCardBody">

                        <p className="detailsCardContent">
                            <span className="textBold">Movie Name:</span> {datas.movieName}
                        </p>
                        <p className="detailsCardContent"><span className="textBold">Director Name:</span> {datas.directorName}</p>

                        <div>
                            <button onClick={() => onDelete(datas.id)} className="deleteBtn">  Delete </button>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

export default DetailsList;
