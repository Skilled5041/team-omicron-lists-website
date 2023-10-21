<script lang="ts">
	import { InputChip } from "@skeletonlabs/skeleton";
	import type { ToastSettings } from "@skeletonlabs/skeleton";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { enhance } from "$app/forms";

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
		message: "The operation is	 successful!",
		timeout: 2500
	};

	const databaseErrorToast: ToastSettings = {
		message: `Error: ${form?.message}`,
		timeout: 2500,
		classes: "bg-error-400-500-token"
	};

	const errorToast: ToastSettings = {
		message: `Error: ${form?.message}`,
		timeout: 2500,
		classes: "bg-error-400-500-token"
	};

	$: if (form?.success) {
		toastStore.trigger(successToast);
	} else if (form?.databaseError) {
		toastStore.trigger(databaseErrorToast);
	} else if (form?.message) {
		toastStore.trigger(errorToast);
	}
</script>

<div class="form-container">
	<h1 class="text-xl pb-4 text-center">Insert, delete, or modify challenge list levels</h1>
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
				<span class="pb-1 block">GDPS Server ID</span>
				<input type="text" name="gdpsId" class="input" placeholder="GDDPS Server ID" />
				{#if form?.gdpsIdError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
			</label>
			<label class="pb-4">
				<span class="pb-1 block"
					>Verification Video URL <span class="text-error-400-500-token">*</span></span
				>
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">https://</div>
					<input
						type="text"
						name="verificationUrl"
						class="input"
						placeholder="example.com"
						required
					/>
				</div>
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
				{#if form?.publisherError}
					<span class="text-error-400-500-token">{form.message}</span>
				{/if}
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
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">https://</div>
					<input type="text" name="nongUrl" class="input" placeholder="example.com" />
				</div>
			</label>
		{:else if currentOperation === "delete"}
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
						{#each data.demons as level}
							<option value={level.id}
								>{level.name} - {level.publisher} [{level.id}]</option
							>
						{/each}
					{:else if data.challenges.length !== 0}
						{#each data.challenges as level}
							<option value={level.id}
								>{level.name} - {level.publisher} [{level.id}]</option
							>
						{/each}
					{/if}
				</select>
			</label>
		{:else if currentOperation === "edit"}
			<label class="level">
				Level:
				<input type="number" name="level" class="input" />
			</label>
			<label class="name">
				Name:
				<input type="text" name="name" class="input" />
			</label>
			<label class="description">
				Description:
				<input type="text" name="description" class="input" />
			</label>
			<label class="points">
				Points:
				<input type="number" name="points" class="input" />
			</label>
			<label class="flag">
				Flag:
				<input type="text" name="flag" class="input" />
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
