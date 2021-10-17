import { NodeItem } from './../interfaces/node-item';

export class NodeModel {
  type: 'folder' | 'file' | 'unset' | null;
  name?: string;
  children?: NodeModel[];
  id: string;

  constructor() {
    this.type = 'unset';
    this.children = [];
    this.id = '';
  }

  setType(type: NodeItem['filetype']): void {
    this.type = type;
  }
  setName(name: string | undefined): void {
    this.name = name;
  }
  setChildren(children: NodeModel[]): void {
    this.children = children;
  }
  setId(id: string): void {
    this.id = id;
  }

  getType(type: string): string | null {
    return this.type;
  }
  getName(name: string | undefined): string | undefined {
    return this.name;
  }
  getChildren(children: NodeModel[] | undefined): NodeModel[] | undefined {
    return this.children;
  }
  getId(id: string): string | null {
    return this.id;
  }
}
