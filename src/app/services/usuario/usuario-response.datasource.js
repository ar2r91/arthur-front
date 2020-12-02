export interface CampoDS {
  success: boolean;
  data: CampoData;
  response: ResponseDS;
}

export interface CampoData {
  campoId: number;
  grupoId: number;
  grupoNombre: string;
  campoPrefijo: string;
  campoNombre: string;
  campoAlias: string;
  campoTag: string;
  campoAliasTag: string;
  campoSecuencia: number;
}

interface ComponenteDS {
  codigo: string;
  descripcion: string;
}

interface ResponseDS {
  codigo: string;
  titulo: string;
  mensaje: string;
}
