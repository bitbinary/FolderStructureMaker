import { NodeModel } from '../models/node.model';

export interface TreeObject {
  [id: string]: NodeModel;
}
