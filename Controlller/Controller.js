class Controller {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send({ errorMsg: error.message });
    }
  };

  registrarLectura = async (req, res) => {
    try {
      const lectura = await this.service.registrarLectura(req.body);
      res.status(201).send(lectura);
    } catch (error) {
      res.status(400).send({ errorMsg: error.message });
    }
  };
}

export default Controller;
