import ReactModal from 'react-modal'
import { useState } from 'react'

const DeleteModal = (isModalOpen) => {
    const handleDeleteConfirm = () => {}

    return (
        <ReactModal isOpen={isModalOpen}>
            <h2>Slett profil</h2>
            <p>
                Er du sikker på at du vil slette profilen din og all din data?
            </p>
            <div>
                <button>Ja, slett brukeren min</button>
                <button onClick={() => setIsModalOpen(false)}>
                    Nei, avbryt
                </button>
            </div>
        </ReactModal>
    )
}

export default DeleteModal
