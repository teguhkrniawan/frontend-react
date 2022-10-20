import React from 'react'
import QRCode from 'react-qr-code'

const ModalQr = ({ clickFn, title }) => {
    return (
        <div>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card" style={{ width: '25%' }}>
                    <header className="modal-card-head">
                        <p className="modal-card-title" style={{ fontSize: '16px' }}><b>{title}</b></p>
                        <button onClick={clickFn} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body has-text-centered">
                        <div>
                            <QRCode value={title} />
                            <p className='has-text-centered mt-2'>scan for look product detail</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ModalQr