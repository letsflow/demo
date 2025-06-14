import { Actor } from "@letsflow/core/process"

function stringToColor(string: string) {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let r = (hash >> 0) & 0xff;
  let g = (hash >> 8) & 0xff;
  let b = (hash >> 16) & 0xff;

  const backgroundColor = `#${[r, g, b]
    .map((x) => `00${x.toString(16)}`.slice(-2))
    .join('')}`;

  // YIQ contrast formula to decide text color
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const fontColor = yiq >= 128 ? '#000' : '#fff';

  return { backgroundColor, color: fontColor };
}


export function actorAvatar(actor: Actor) {
  const name = actor.name ?? actor.title;
  const parts = name.split(' ');

  return {
    style: {
      ...stringToColor(name),
    },
    label: `${parts[0][0]}${parts.length > 1 ? parts[1][0] : ''}`,
  };
}
