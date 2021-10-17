export class NodeModel {
  type: string | null = null;
  name?: string;
  children: NodeModel[] = [];
  id: string;

  constructor() {
    this.type = null;
    this.name = undefined;
    this.id = '';
  }

  setType(type: string): void {
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
