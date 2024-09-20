export interface SolicitudInterface {
    idSolicitud: number;
    fechaCreacion: string;
    monto: number;
    plazo: number;
    idFormaPago: IdFormaPago;
    idPersona: IdPersona;
  }
  export interface IdFormaPago {
    idFormaPago: number;
    descripcion: string;
  }
  export interface IdPersona {
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
  