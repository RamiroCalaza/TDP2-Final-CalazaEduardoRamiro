class Service {
  constructor(sensoresDAO) {
    this.sensoresDAO = sensoresDAO;
  }

  getAll = async () => {
    return await this.sensoresDAO.listar();
  };

  registrarLectura = async (lectura) => {
    this.validarLectura(lectura);

    const alerta = this.generarAlerta(lectura.tipo, lectura.valor);

    const sensor = {
      ...lectura,
      alerta,
    };

    return await this.sensoresDAO.guardar(sensor);
  };

  validarLectura = (lectura) => {
    const { id, tipo, valor, timestamp } = lectura;

    if (!/^[a-zA-Z0-9]{8}$/.test(id)) {
      throw new Error("El id debe tener 8 caracteres alfanuméricos");
    }

    if (!["TEMPERATURA", "HUMEDAD", "CO2"].includes(tipo)) {
      throw new Error("Tipo de sensor inválido");
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
      throw new Error("El valor debe ser numérico");
    }

    if (typeof timestamp !== "string") {
      throw new Error("El timestamp debe ser un string");
    }
  };

  generarAlerta = (tipo, valor) => {
    if (tipo === "TEMPERATURA" && valor > 35) {
      return "TEMPERATURA alta";
    }

    if (tipo === "HUMEDAD" && valor < 20) {
      return "HUMEDAD baja";
    }

    if (tipo === "CO2" && valor > 1000) {
      return "CO2 alto";
    }

    return null;
  };
}

export default Service;
