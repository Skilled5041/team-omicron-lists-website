<script lang="ts">
	import { InputChip } from "@skeletonlabs/skeleton";
	import type { ToastSettings } from "@skeletonlabs/skeleton";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { enhance } from "$app/forms";
	import type { EventHandler } from "svelte/elements";

	export let form;
	export let data;

	let currentOperation: "insert" | "delete" | "edit" = "insert";
	let creators: string[];
	let fps: number[];
	let selectedList = "demons";

	const fpsValidation = (value: string) => {
		const parsed = parseInt(value);
		if (isNaN(parsed)) return false;
		return !(parsed < 60 || parsed > 360);
	};

	const toastStore = getToastStore();

	const successToast: ToastSettings = {
		message: "The operation is successful!",
		timeout: 2500
	};

	let databaseErrorToast: ToastSettings = {
		message: `Error: ${form?.message}`,
		timeout: 2500,
		autohide: false,
		classes: "bg-error-400-500-token"
	};

	let errorToast: ToastSettings = {
		message: `Error: ${form?.message}`,
		timeout: 2500,
		autohide: false,
		classes: "bg-error-400-500-token"
	};

	$: if (form?.success) {
		toastStore.trigger(successToast);
	} else if (form?.databaseError) {
		databaseErrorToast.message = `Error: ${form.message}`;
		toastStore.trigger(databaseErrorToast);
	} else if (form?.message) {
		errorToast.message = `Error: ${form.message}`;
		toastStore.trigger(errorToast);
	}
	let deleteOrRestore: string;
	let currentLevelIndex = 0;

	const handleLevelChange = (e: Event) => {
		if (selectedList === "demons") {
			currentLevelIndex = data.demons.findIndex(
				(demon) => demon.id.toString() === (e.target as HTMLSelectElement).value
			);
		} else {
			currentLevelIndex = data.challenges.findIndex(
				(challenge) => challenge.id.toString() === (e.target as HTMLSelectElement).value
			);
		}
	};
</script>

<div class="form-container">
	<h1 class="text-xl pb-4 text-center">Insert, delete, or modify list levels</h1>
	<form action="?/submit" method="POST" use:enhance>
		<label class="pb-4">
			<span class="pb-2 block">Operation</span>
			<select bind:value={currentOperation} class="select" name="operation">
				<option value="insert">Insert</option>
				<option value="delete">Delete</option>
				<option value="edit">Edit</option>
			</select>
		</label>
		{#if currentOperation === "insert"}
			<label class="pb-4">
				<span class="pb-1 block">List <span class="text-error-400-500-token">*</span></span>
				<select class="select" name="list">
					<option value="demons">Demons</option>
					<option value="challenge">Challenges</option>
				</select>
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Level Name <span class="text-error-400-500-token">*</span></span
				>
				<input
					type="text"
					name="levelName"
					class="input"
					placeholder="Level Name"
					required
				/>
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Main Server ID <span class="text-error-400-500-token">*</span></span
				>
				<input
					type="text"
					name="mainId"
					class="input"
					placeholder="Main Server ID"
					required
				/>
				{#if form?.mainIdError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>GDPS Server ID <span class="text-error-400-500-token">*</span></span
				>
				<input type="text" name="gdpsId" class="input" placeholder="GDDPS Server ID" />
				{#if form?.gdpsIdError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Verification Video URL <span class="text-error-400-500-token">*</span></span
				>
				<span class="input-group input-group-divider flex flex-row items-center">
					<span class="pl-4 pr-4 text-surface-600-300-token">https://</span>
					<input
						type="text"
						name="verificationUrl"
						class="input"
						placeholder="example.com"
						required
					/>
				</span>
				{#if form?.verificationUrlError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Verifier <span class="text-error-400-500-token">*</span></span
				>
				<input type="text" name="verifier" class="input" placeholder="Verifier" required />
				{#if form?.verifierError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Publisher <span class="text-error-400-500-token">*</span></span
				>
				<input
					type="text"
					name="publisher"
					class="input"
					placeholder="Publisher"
					required
				/>
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Creators <span class="text-error-400-500-token">*</span></span
				>
				<InputChip
					bind:value={creators}
					name="creators"
					placeholder="Enter creators:"
					min={1}
					allowUpperCase
					required
				/>
				<!-- Gets rid of IDE warning -->
				<input class="hidden" />
			</label>
			<label class="pb-4">
				<span class="pb-1 block">Rank <span class="text-error-400-500-token">*</span></span>
				<input
					type="number"
					name="rank"
					min={1}
					class="input"
					placeholder="Rank"
					required
				/>
				{#if form?.rankError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Minimum List Percentage <span class="text-error-400-500-token">*</span></span
				>
				<input
					type="number"
					name="minimumPercentage"
					min={1}
					max={99}
					class="input"
					placeholder="Minimum List Percentage"
					required
				/>
			</label>
			<label class="pb-4">
				<span class="pb-1 block">FPS (leave empty for any)</span>
				<InputChip
					bind:value={fps}
					name="fps"
					placeholder="Enter FPS"
					validation={fpsValidation}
				/>
				<!-- Gets rid of IDE warning -->
				<input class="hidden" />
			</label>
			<label class="pb-4">
				<span class="pb-1 block">NONG Download URL</span>
				<span class="input-group input-group-divider flex flex-row items-center">
					<span class="pl-4 pr-4 text-surface-600-300-token">https://</span>
					<input type="text" name="nongUrl" class="input" placeholder="example.com" />
				</span>
			</label>
		{:else if currentOperation === "delete"}
			<label class="pb-4">
				<span class="pb-1 block">Delete or Restore</span>
				<select class="select" name="deleteOrRestore" bind:value={deleteOrRestore}>
					<option value="delete"> Delete</option>
					<option value="restore">Restore</option>
				</select>
			</label>
			<label class="pb-4">
				<span class="pb-1 block">List <span class="text-error-400-500-token">*</span></span>
				<select bind:value={selectedList} class="select mb-4" name="list" required>
					<option value="demons">Demons</option>
					<option value="challenge">Challenges</option>
				</select>
				<span class="pb-1 block">Level <span class="text-error-400-500-token">*</span></span
				>
				<select class="select" name="level" required>
					{#if selectedList === "demons" && data.demons.length !== 0}
						{#if deleteOrRestore === "delete"}
							{#each data.demons.filter((demon) => !demon.deleted) as level}
								<option value={level.id}
									>{level.name} - {level.publisher} (Main ID: {level.main_id})
								</option>
							{/each}
						{:else}
							{#each data.demons.filter((demon) => demon.deleted) as level}
								<option value={level.id}
									>{level.name} - {level.publisher} (Main ID: {level.main_id})
								</option>
							{/each}
						{/if}
					{:else if data.challenges.length !== 0}
						{#if deleteOrRestore === "delete"}
							{#each data.challenges.filter((demon) => !demon.deleted) as level}
								<option value={level.id}
									>{level.name} - {level.publisher} (Main ID: {level.main_id})
								</option>
							{/each}
						{:else}
							{#each data.challenges.filter((demon) => demon.deleted) as level}
								<option value={level.id}
									>{level.name} - {level.publisher} (Main ID: {level.main_id})
								</option>
							{/each}
						{/if}
					{/if}
				</select>
			</label>
			{#if deleteOrRestore === "restore"}
				<label class="pb-4">
					<span class="pb-1 block">Rank</span>
					<input type="number" name="rank" min={1} class="input" placeholder="Rank" />
					{#if form?.rankError}
						<span class="text-error-400-500-token">{form.message}</span>
					{/if}
				</label>
			{/if}
		{:else if currentOperation === "edit"}
			<label>
				<span class="pb-1 block">List <span class="text-error-400-500-token">*</span></span>
				<select bind:value={selectedList} class="select mb-4" name="list" required>
					<option value="demons">Demons</option>
					<option value="challenge">Challenges</option>
				</select>
			</label>
			<label class="pb-4">
				<span class="pb-1 block">Level <span class="text-error-400-500-token">*</span></span
				>
				<select class="select" name="level" required on:change={handleLevelChange}>
					{#if selectedList === "demons" && data.demons.length !== 0}
						{#each data.demons?.filter((demon) => !demon.deleted) ?? [] as level}
							<option value={level.id}
								>{level.name} - {level.publisher} (Main ID: {level.main_id})
							</option>
						{/each}
					{:else if data.challenges.length !== 0}
						{#each data.challenges?.filter((challenge) => !challenge.deleted) ?? [] as level}
							<option value={level.id}
								>{level.name} - {level.publisher} [{level.id}]
							</option>
						{/each}
					{/if}
				</select>
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>New Level Name <span class="text-error-400-500-token">*</span></span
				>
				<input
					type="text"
					name="newLevelName"
					class="input"
					placeholder="New Level Name"
					value={selectedList === "demons"
						? data.demons[currentLevelIndex].name
						: data.challenges[currentLevelIndex].name}
					required
				/>
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>New Main Server ID <span class="text-error-400-500-token">*</span></span
				>
				<input
					type="text"
					name="newMainId"
					class="input"
					placeholder="New Main Server ID"
					value={selectedList === "demons"
						? data.demons[currentLevelIndex].main_id
						: data.challenges[currentLevelIndex].main_id}
				/>
				{#if form?.mainIdError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New GDPS Server ID</span>
				<input
					type="text"
					name="newGdpsId"
					class="input"
					placeholder="New GDDPS Server ID"
					value={selectedList === "demons"
						? data.demons[currentLevelIndex].gdps_id
						: data.challenges[currentLevelIndex].gdps_id}
				/>
				{#if form?.gdpsIdError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New Verification Video URL</span>
				<span class="input-group input-group-divider flex flex-row items-center">
					<span class="pl-4 pr-4 text-surface-600-300-token">https://</span>
					<input
						type="text"
						name="newVerificationUrl"
						class="input"
						placeholder="example.com"
						required
						value={selectedList === "demons"
							? data.demons[currentLevelIndex].verification_url
							: data.challenges[currentLevelIndex].verification_url}
					/>
				</span>
				{#if form?.verificationUrlError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New Verifier</span>
				<input
					type="text"
					name="newVerifier"
					class="input"
					placeholder="New Verifier"
					value={selectedList === "demons"
						? data.demons[currentLevelIndex].verifier
						: data.challenges[currentLevelIndex].verifier}
				/>
				{#if form?.verifierError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New Publisher</span>
				<input type="text" name="newPublisher" class="input" placeholder="New Publisher" />
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New Creators</span>
				<InputChip
					bind:value={creators}
					name="newCreators"
					placeholder="Enter creators:"
					min={1}
					allowUpperCase
				/>
				<!-- Gets rid of IDE warning -->
				<input class="hidden" />
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New Rank</span>
				<input type="number" name="newRank" min={1} class="input" placeholder="New Rank" />
				{#if form?.rankError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New Minimum List Percentage</span>
				<input
					type="number"
					name="newMinimumPercentage"
					min={1}
					max={99}
					class="input"
					placeholder="New Minimum List Percentage"
				/>
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New FPS (leave empty for any)</span>
				<InputChip
					bind:value={fps}
					name="newFps"
					placeholder="New Enter FPS"
					validation={fpsValidation}
				/>
				<!-- Gets rid of IDE warning -->
				<input class="hidden" />
			</label>
			<label class="pb-4">
				<span class="pb-1 block">New NONG Download URL</span>
				<span class="input-group input-group-divider flex flex-row items-center">
					<span class="pl-4 pr-4 text-surface-600-300-token">https://</span>
					<input type="text" name="newNongUrl" class="input" placeholder="example.com" />
				</span>
			</label>
		{/if}
		<button class="btn variant-filled-primary w-full mt-4 mb-4" type="submit">Submit</button>
	</form>
</div>

<style lang="postcss">
	.form-container {
		border-radius: 12px;
		margin: 6% 30% 0 30%;
		padding: 2% 5% 2% 5%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 1400px) {
		.form-container {
			margin: 6% 15% 0 15%;
		}
	}

	@media (max-width: 768px) {
		.form-container {
			margin: 6% 5% 0 5%;
		}
	}
</style>
