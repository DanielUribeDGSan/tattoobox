import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const ModalFullScreen = ({ modal_id, refBtn, children }) => {
  return (
    <div
      className="modal fade modal-full-screen"
      id={modal_id}
      aria-labelledby="tatuajeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-body">
            <div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                title="Close"
                ref={refBtn}
              >
                <CloseIcon />
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
