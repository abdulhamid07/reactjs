import React, { Component } from 'react'

class KelasComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jumlah:0
        }
    }
    tambahProduk = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.jumlah}</h1>
                <button className="btn btn-primary" onClick={this.tambahProduk}>Tambah</button>
            </div>
        )
    }
}
export default KelasComp;