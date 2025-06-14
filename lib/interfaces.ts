import { Actor } from "@letsflow/core/process"

export interface ScenarioSummery {

}

export interface ProcessSummery {
  id: string;
  title: string;
  description: string;
  tags: string[];
  actors: Actor[];
  scenario: ScenarioSummery;
}

export interface Account {
  id: string;
  info: {
    name: string;
    [_: string]: any;
  };
  roles: string[];
  token: string;
}
