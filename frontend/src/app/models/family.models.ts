export interface FamilyMember {
    id: number,
    email: string;
    firstName: string;
    lastName: string;
}

export interface Family {
    id: number;
    familyCode: string;
    members: FamilyMember[];
}