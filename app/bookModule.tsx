export default function BookModule() {
  return (
    <>
    <div className="modal fade" id="bookModule" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Book Module</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          Bookings can not be placed at this time.
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" style={{backgroundColor: '#000'}} data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
    </>
  )
}