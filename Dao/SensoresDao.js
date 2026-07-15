class SensoresDAO {
  constructor() {
    this.sensores = [];
  }

  buscarPorId = async (id) => {
    return this.sensores.find((sensor) => sensor.id === id);
  };

  guardar = async (sensor) => {
    const sensorExistente = await this.buscarPorId(sensor.id);

    if (sensorExistente) {
      Object.assign(sensorExistente, sensor);
      return sensorExistente;
    }

    this.sensores.push(sensor);
    return sensor;
  };

  listar = async () => {
    return this.sensores;
  };
}

export default SensoresDAO;
