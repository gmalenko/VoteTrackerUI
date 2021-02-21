import { SelfRegistration } from "./self-registration";
import { VoteCandidate } from "./vote-candidate";

export class VoteTally{
    public id: string;
    public voteSelfRegistration: SelfRegistration;
    public voteCandidate: VoteCandidate;
    public isDeleted: boolean;
}