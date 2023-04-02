





export default function StatusOrder({setStatusOrder, setBigBlockProduct, statusOrder}) {

const recent = () => {
    setStatusOrder('NEW')
    setBigBlockProduct(false)
}

const fifnish = () => {
    setStatusOrder('ACTIVE')
    setBigBlockProduct(false)
}
const cancel = () => {
    setStatusOrder('PROCESSED')
    setBigBlockProduct(false)
}
const finished = () => {
    setStatusOrder('FINISHED')
    setBigBlockProduct(false)
}
const refunded = () => {
    setStatusOrder('REFUNDED')
    setBigBlockProduct(false)
}

    return(
<div className="statusOrder">
    <div className="statusOrderWrap">
        <ul>
            {statusOrder === 'NEW' &&
            <>
            <li className="statusOrderWrapliActive" onClick={recent}>NEW</li>
            <li className="statusOrderWrapliNotActive" onClick={fifnish}>ACTIVE</li>
            <li className="statusOrderWrapliNotActive" onClick={cancel}>PROCESSED</li>
            <li className="statusOrderWrapliNotActive" onClick={finished}>FINISHED</li>
            <li className="statusOrderWrapliNotActive" onClick={refunded}>REFUNDED</li>
            </>
            }
            {statusOrder === 'ACTIVE' &&
            <>
            <li className="statusOrderWrapliNotActive" onClick={recent}>NEW</li>
            <li className="statusOrderWrapliActive" onClick={fifnish}>ACTIVE</li>
            <li className="statusOrderWrapliNotActive" onClick={cancel}>PROCESSED</li>
            <li className="statusOrderWrapliNotActive" onClick={finished}>FINISHED</li>
            <li className="statusOrderWrapliNotActive" onClick={refunded}>REFUNDED</li>
            </>
            }
             {statusOrder === 'PROCESSED' &&
            <>
            <li className="statusOrderWrapliNotActive" onClick={recent}>NEW</li>
            <li className="statusOrderWrapliNotActive" onClick={fifnish}>ACTIVE</li>
            <li className="statusOrderWrapliActive" onClick={cancel}>PROCESSED</li>
            <li className="statusOrderWrapliNotActive" onClick={finished}>FINISHED</li>
            <li className="statusOrderWrapliNotActive" onClick={refunded}>REFUNDED</li>
            </>
            }
            {statusOrder === 'FINISHED' &&
            <>
            <li className="statusOrderWrapliNotActive" onClick={recent}>NEW</li>
            <li className="statusOrderWrapliNotActive" onClick={fifnish}>ACTIVE</li>
            <li className="statusOrderWrapliNotActive" onClick={cancel}>PROCESSED</li>
            <li className="statusOrderWrapliActive" onClick={finished}>FINISHED</li>
            <li className="statusOrderWrapliNotActive" onClick={refunded}>REFUNDED</li>
            </>
            }
            {statusOrder === 'REFUNDED' &&
            <>
            <li className="statusOrderWrapliNotActive" onClick={recent}>NEW</li>
            <li className="statusOrderWrapliNotActive" onClick={fifnish}>ACTIVE</li>
            <li className="statusOrderWrapliNotActive" onClick={cancel}>PROCESSED</li>
            <li className="statusOrderWrapliNotActive" onClick={finished}>FINISHED</li>
            <li className="statusOrderWrapliActive" onClick={refunded}>REFUNDED</li>
            </>
            }
          
        </ul>

    </div>
</div>

    )
}