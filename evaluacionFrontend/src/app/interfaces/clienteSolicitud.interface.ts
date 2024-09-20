export interface ClienteSolicitudInterface {
    idPersona: number;
    dui: string;
    nit: string;
    nombres: string;
    apellidos: string;
    sexo: string;
    idActividadEconomica: IdActividadEconomica;
    idEstadoCivil: IdEstadoCivil;
  }

export interface IdActividadEconomica {
    idActividadEconomica: number;
    descripcion: string;
  }

export interface IdEstadoCivil {
    idEstadoCivil: number;
    descripcion: string;
  }
  