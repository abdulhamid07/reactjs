import React, {useState} from 'react'
import TampilComp from './TampilComp';

function HooksComp() {
    const [jumlah, tambahJumlah] = useState(0);

    //login
    const [dataLogin, setDataLogin] = useState({username:"hamid", password:"hamid123", isLogin:true})
    
    let tampil;

    if(dataLogin.isLogin){
        tampil = <TampilComp message="" username={dataLogin.username} fungsi = {tambahJumlah.bind(this)} jumlah={jumlah}/>
    }else{
        tampil = <TampilComp message="Maaf Anda belum login" disabled={true}/>
    }
    return (
      <div>
        {tampil}
      </div>
    );
}
export default HooksComp;
