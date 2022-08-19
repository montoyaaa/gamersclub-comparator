import { Medal } from "./medal.type";
import { Stats } from "./stats.type";

export interface User {
  id: number;
  name: string;
  skill_level: number;
  background: string;
  avatar: string;
  frame: string;
  medal: Medal;
  stats: Stats;
}
