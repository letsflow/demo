import styles from "@/app/page.module.css"
import ProcessTimeline from "@/components/process-timeline"
import { getProcess } from "@/actions/letsflow"

export default async function ProcessPage(args: { id: string }) {
  let process = await getProcess(args.id);

  if (!process) {
    return <></>;
  }

  return (
    <main className={styles.main}>
      <ProcessTimeline process={process} />
    </main>
  );
}
