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
