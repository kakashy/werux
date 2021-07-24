<svelte:head>
	<title>Open Ticket</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full h-full max-w-screen">
	<div
		class="bg-black from-dark-200 to-dark-500 bg-gradient-to-bl text-white p-7 sm:rounded-xl shadow-md w-screen sm:w-2/3 md:shadow-xl"
	>
		<p class="text-white">Open a Ticket</p>
		<form
			class="flex flex-col space-y-2 sm:mt-3 bg-dark-800 p-5 border-2 border-dashed border-blue-400 border-opacity-70"
		>
			<label class="flex flex-row justify-between flex-wrap"
				>Site URL:
				<input
					type="url"
					placeholder="Affected site"
					class="bg-dark-700 outline-none focus:bg-dark-200 p-3 rounded-md border-2 border-transparent focus:border-blue-400 invalid:border-red-400 valid:border-green-400"
					required
				/>
			</label>
			<label class="flex flex-row justify-between flex-wrap"
				>Error Code:
				<select class="p-3 rounded-md bg-dark-700 focus:bg-dark-200">
					<option value="404">404</option>
					<option value="500">500</option>
					<option value="Other">Other</option>
				</select>
			</label>
			<label class="flex flex-row justify-between flex-wrap"
				>Additional info:
				<textarea
					placeholder="Any other weird bug found?"
					class="bg-dark-700 focus:bg-dark-500 p-3 rounded-md border-2 border-transparent outline-none text-gray-700 focus:border-blue-400 focus:text-black"
				/>
			</label>
			<button
				type="submit"
				class="rounded-lg p-3 bg-green-400 from-blue-400 to-green-400 bg-gradient-to-br hover:from-blue-300 hover:to-green-300 hover:shadow-md hover:rounded-sm transition-all"
				>Open Ticket</button
			>
		</form>
	</div>
</div>
