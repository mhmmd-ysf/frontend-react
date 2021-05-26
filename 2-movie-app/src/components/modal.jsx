import React from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <img 
        className="mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none hover:shadow-lg focus:outline-none"
        onClick={() => setShowModal(true)}
        src={ props.movie.Poster } alt="modal" />
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">
                    { props.movie.Title }
                  </h3>
                  <button
                    className="float-right p-1 ml-5 text-3xl font-semibold leading-none text-black border-0 outline-none opacity-40 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-40 focus:outline-none">
                      ✕
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex items-center justify-center p-6">
                  <img src={ props.movie.Poster } alt="modal" />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}