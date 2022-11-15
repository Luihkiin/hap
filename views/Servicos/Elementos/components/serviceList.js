import { useState, useEffect } from "react";

const [servicos, setServicos] = useState([]);

const coletarServico = async () => {
    await API.listServices();
    setServicos(jsonService)
}

useEffect(() => {
    coletarServico();
}, [])

