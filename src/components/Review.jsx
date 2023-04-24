export default function Review({ review, index }) {
  return (
    <>
      <div key={index} className="container border mt-5">
        <div className="row p-3">
          <img
            src={review.avatar}
            alt="randomuser"
            className="rounded-circle w-25"
          />
          <div className="col">
            <span className="row">{review.date}</span>
            <span className="row">{review.name}</span>
          </div>
          <div className="col text-end p-0">
            <i className="fa fa-thumbs-up" />
            rating {review.rating}
          </div>
        </div>
        <div className="row">
          <p>{review.description}</p>
        </div>
      </div>
    </>
  )
}
