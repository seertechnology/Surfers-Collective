export default function ContactModule() {
    return (
      <>
      <div className="modal fade" id="contactModule" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          Enquiries have been suspended at this time.
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