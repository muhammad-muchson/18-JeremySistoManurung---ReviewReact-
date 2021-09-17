const validasi = (values) => {

    let errors={};

    if(!values.firstname){
        errors.firstname="Nama harus di isi."
    }

    if(!values.email){
        errors.email="Email harus di isi."
    }

    if(!values.number){
        errors.number="Nomor harus di isi."
    }

    return errors;
}

export default validasi
