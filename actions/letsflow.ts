'use server';

import { Process } from "@letsflow/core/process";
import { Scenario } from "@letsflow/core/scenario";
import { Account, ProcessSummery } from "@/lib/interfaces"

const API_URL = process.env.LETSFLOW_API_ADDRESS ?? 'http://localhost:3000';

export async function getDemoAccounts(): Promise<Account[]> {
  const response = await fetch(`${API_URL}/demo-accounts`);

  if (!response.ok) {
    throw new Error('Failed to fetch demo accounts', { cause: await response.text() });
  }

  return response.json();
}

export async function getScenarios(): Promise<Array<{ id: string, title: string, description: string}>> {
  const response = await fetch(`${API_URL}/scenarios`);

  if (!response.ok) {
    throw new Error('Failed to fetch scenarios', { cause: await response.text() });
  }

  return response.json();
}

export async function getScenario(id: string): Promise<Scenario> {
  const response = await fetch(`${API_URL}/scenarios/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch scenario '${id}'`, { cause: await response.text() });
  }

  return response.json();
}

export async function getProcesses(): Promise<ProcessSummery[]> {
  const response = await fetch(`${API_URL}/processes`);

  if (!response.ok) {
    throw new Error('Failed to fetch processes', { cause: await response.text() });
  }

  return response.json();
}

export async function getProcess(id: string): Promise<Process> {
  const response = await fetch(`${API_URL}/processes/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch process '${id}'`, { cause: await response.text() });
  }

  return response.json();
}
