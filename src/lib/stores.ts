import { persisted } from "svelte-local-storage-store";
import type { Writable } from "svelte/store";

type listTab = "main" | "extended" | "legacy";
export const currentDemonListTab: Writable<listTab> = persisted("currentDemonListTab", "main");
export const currentChallengeListTab: Writable<listTab> = persisted(
	"currentChallengeListTab",
	"main"
);
