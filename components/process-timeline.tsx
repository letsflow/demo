import { ActionEvent, InstantiateEvent, Process, TimeoutEvent } from "@letsflow/core/process"
import { actorAvatar } from "@/lib/actor-avatar"
import { Avatar } from 'primereact/avatar';

interface ProcessTimelineProps {
  process: Process;
}

function isInstantiateEvent(event: ActionEvent | InstantiateEvent | TimeoutEvent): event is InstantiateEvent {
  return (event as InstantiateEvent).id !== undefined;
}

function isActionEvent(event: ActionEvent | InstantiateEvent | TimeoutEvent): event is ActionEvent {
  return (event as ActionEvent).actor !== undefined;
}

export default function ProcessTimeline({ process }: ProcessTimelineProps) {
  const elements = process.events.map((event, index) => {
    const timestamp = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' })
      .format(event.timestamp);

    if (isInstantiateEvent(event)) {
      return (
        <div key={index}>
          <i className="pi pi-flag" />
          <div className="timestamp">{ timestamp }</div>
        </div>
      );
    }

    if (!isActionEvent(event)) {
      return (
        <div key={index}>
          <i className="pi pi-clock" />
          <div className="timestamp">{ timestamp }</div>
        </div>
      );
    }

    return (
      <div key={index}>
        <Avatar {...actorAvatar(process.actors[event.actor.key])} />
      </div>
    );
  });

  return (
    <div>

    </div>
  );
}
