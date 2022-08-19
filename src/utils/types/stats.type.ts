import { LastMatch } from "./last_match.type";

export interface Stats {
  won: number;
  lost: number;
  last_match: LastMatch;
  kdr: number;
  kill: number;
  death: number;
}
