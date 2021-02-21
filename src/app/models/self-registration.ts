import { VotePeriod } from './vote-period';

export class SelfRegistration {
    public id: string;
    public firstname: string;
    public lastname: string;
    public votePeriod: string;
    public email: string;
}

export class SelfRegistrationResponse {
    public selfRegistration: SelfRegistration;
    public response: boolean;
    public votePeriod: VotePeriod;
}