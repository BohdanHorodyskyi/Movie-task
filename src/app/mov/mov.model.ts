import { IMov } from "./mov.interface";

export class Mov implements IMov{
    constructor(public title: string,
                public image: string,
                public des: string
                ) {}
}