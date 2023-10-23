import ReactModal from 'react-modal'

const DeleteModal = props => {
    return (
        <ReactModal
            isOpen={props.isModalOpen}
            className="w-full flex justify-center items-center pt-52">
            <div className=" bg-gray-200 w-64 h-80 rounded-lg border-black border-2">
                <h2 className="text-center text-red-900 text-xl">
                    Slett profil
                </h2>
                <p className="text-center">
                    Er du sikker på at du vil slette profilen din og all din
                    data?
                </p>
                <div className=" mt-36 flex flex-col items-center justify-center">
                    <button
                        onClick={() => props.deleteProfile()}
                        className=" bg-red-600 w-44 h-10 rounded-lg text-white">
                        Ja, slett brukeren min
                    </button>
                    <button
                        className="mt-4"
                        onClick={() => props.setIsModalOpen(false)}>
                        Nei, avbryt
                    </button>
                </div>
            </div>
        </ReactModal>
    )
}

export default DeleteModal
