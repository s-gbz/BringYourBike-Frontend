export class Bike {
    id: number;
    pin: number;
    ownerName: string;
    email: string;
    model: string;
    priority: number;
    status: number;
    issues: { id: number, number: number, fixed: boolean} [];
}

export class BikeInterface {
    pin: number;
    ownerName: string;
    email: string;
    model: string;
    priority: number;
    status: number;
    issues: { id: number, number: number, fixed: boolean} [];
}

export class Issue {
    static readonly Vorderlichtdefekt = new Issue("Vorderlichtdefekt", 1, 0);
    static readonly Hinterlichtdefekt = new Issue("Hinterlichtdefekt", 1, 1);
    static readonly Kettendefekt = new Issue("Kettendefekt", 1, 2);
    static readonly Vorderraddefekt = new Issue("Vorderraddefekt", 2,  3);
    static readonly Hinterraddefekt = new Issue("Hinterraddefekt", 2, 4);
    static readonly Bremsendefekt = new Issue("Bremsendefekt", 3, 5);
    static readonly STVOungerecht = new Issue("STVO ungeeignet", 3, 6);

    private constructor(public name: string, public readonly importance: number, public readonly id: number) { }

    public static getAllIssues(): Issue [] {
        return [ Issue.Vorderlichtdefekt, Issue.Hinterlichtdefekt, Issue.Kettendefekt, Issue.Vorderraddefekt,
            Issue.Hinterraddefekt, Issue.Bremsendefekt, Issue.STVOungerecht ];
    }
}

export enum Status {
    WAIT = "Ausstehend",
    GOING = "In Bearbeitung",
    READY = "Bereit zur Abholung"
}

export enum BikeModels {
    RoadRunner = "Shizoma Road Runner",
    MountainMuncher = "Yarama Mountain Muncher",
    LangLauefer = "Idua Lang Läufer"
}