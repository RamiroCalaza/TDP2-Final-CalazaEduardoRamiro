import Controller from "../Controlller/Controller.js";
import Service from "../Services/Sevice.js";
import SensoresDAO from "../DAO/SensoresDAO.js";

const sensoresDAO = new SensoresDAO();
const service = new Service(sensoresDAO);
const controller = new Controller(service);

export default controller;
