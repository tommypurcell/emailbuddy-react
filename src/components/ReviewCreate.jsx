import axios from 'axios'

export default function ReviewCreate({ makeReview }) {
  return (
    <>
      <form onSubmit={(e) => makeReview(e)}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          name="description"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={''}
        />
        <div>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => setRating(1)}
          >
            <i className="fa fa-thumbs-up" />
          </button>
          <button
            type="button"
            className="btn btn-outline-warning border"
            onClick={() => setRating(-1)}
          >
            <i className="fa fa-thumbs-down" />
          </button>
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Leave a Review
        </button>
      </form>
    </>
  )
}
