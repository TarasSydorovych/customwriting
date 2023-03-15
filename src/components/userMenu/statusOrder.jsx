





export default function StatusOrder({setStatusOrder, setBigBlockProduct, statusOrder}) {
const recent = () => {
    setStatusOrder('RECENT')
    setBigBlockProduct(false)
}

const fifnish = () => {
    setStatusOrder('FINISHED')
    setBigBlockProduct(false)
}
const cancel = () => {
    setStatusOrder('CANCELED')
    setBigBlockProduct(false)
}

    return(
<div className="statusOrder">
    <div className="statusOrderWrap">
        <ul>
            {statusOrder === 'RECENT' &&
            <>
            <li className="statusOrderWrapliActive" onClick={recent}>RECENT</li>
            <li className="statusOrderWrapliNotActive" onClick={fifnish}>FINISHED</li>
            <li className="statusOrderWrapliNotActive" onClick={cancel}>CANCELED</li>
            </>
            }
            {statusOrder === 'FINISHED' &&
            <>
            <li className="statusOrderWrapliNotActive" onClick={recent}>RECENT</li>
            <li className="statusOrderWrapliActive" onClick={fifnish}>FINISHED</li>
            <li className="statusOrderWrapliNotActive" onClick={cancel}>CANCELED</li>
            </>
            }
             {statusOrder === 'CANCELED' &&
            <>
            <li className="statusOrderWrapliNotActive" onClick={recent}>RECENT</li>
            <li className="statusOrderWrapliNotActive" onClick={fifnish}>FINISHED</li>
            <li className="statusOrderWrapliActive" onClick={cancel}>CANCELED</li>
            </>
            }
          
        </ul>

    </div>
</div>

    )
}