import React from 'react'

function TampilComp(props) {
    return (
        <div>
            {props.message === "" ? (
                <>
                <p>Hello, {props.username}</p>
                <h1>{props.jumlah}</h1>
                <button className="btn btn-primary" onClick={()=>props.fungsi(props.jumlah+1)}>Tambah</button>
                </>
            ):(
                <>
                <div className="alert alert-danger">{props.message}</div>
                </>
            ) }
        </div>
    )
}
export default TampilComp;
