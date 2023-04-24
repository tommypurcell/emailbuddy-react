export default function Review() {
  return (
    <>
      <div className="container border mt-5">
        <div className="row p-3">
          <img
            src="images/randomuser1.png"
            alt="randomuser"
            className="rounded-circle w-25"
          />
          <div className="col">
            <span className="row">date of review</span>
            <span className="row">User Name</span>
          </div>
          <div className="col text-end p-0">
            <i className="fa fa-thumbs-up" />
          </div>
        </div>
        <div className="row">
          <p>
            This place is fantastic! The views are breathtaking and it's just a
            short walk to all the shops. My family and I had an amazing
            experience.
          </p>
        </div>
      </div>
    </>
  )
}
