import {Item, ControlItem, Icon} from '@app/models/frontend';
export {Item, ControlItem} from '@app/models/frontend';

export interface Dictionaries {
  documentos : any,
  tiposDocumentos: any
}

export interface Dictionary {
    items: Item[];
    controlItems: ControlItem[];
}
