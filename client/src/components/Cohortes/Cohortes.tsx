import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddCohorte from "./Add";
import Listado from "./Listado";
import Historial from "./Historial";
import "components/Cohortes/Cohortes.css";

function Cohortes() {
  return (
    <div id="contenedor-seccion-cohortes">
      <div id="contenedor-interfaz-cohortes">
        <Tabs id="Cohorte-Tab">
          <TabList id="Cohorte-TabList">
            <Tab>Cohortes</Tab>
            <Tab>Nuevo Cohorte</Tab>
            <Tab>Historial</Tab>
          </TabList>
          <TabPanel>
            <Listado />
          </TabPanel>
          <TabPanel>
            <AddCohorte />
          </TabPanel>
          <TabPanel>
            <Historial />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Cohortes;
