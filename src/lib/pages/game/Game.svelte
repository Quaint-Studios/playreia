<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	type FileNames =
		| 'index.wasm'
		| 'index.side.wasm'
		| 'index.apple-touch-icon.png'
		| 'index.audio.worklet.js'
		| 'index.pck'
		| 'index.png'
		| 'index.audio.position.worklet.js'
		| 'index.js'
		| 'index.html'
		| 'index.icon.png';

	const uploadthing_url = 'https://nq0cnjludn.ufs.sh/f';
	function getFile(name: FileNames, useJsdelivr = false): string {
		switch (name) {
			case 'index.wasm':
				return `${uploadthing_url}/21j63lqspySPgWwCJlcVMuZfNHnsywBESQm6x7p34htrW0bP`;
			case 'index.side.wasm':
				return `${uploadthing_url}/21j63lqspySP9YBMT5sn8CyYQSXNwHo4B2RMueigqxFvkA7K`;
			case 'index.apple-touch-icon.png':
				return `${uploadthing_url}/21j63lqspySPnh9clnr7K4Y0RDi3ltTXQVBJdmrEuwFaN5S9`;
			case 'index.audio.worklet.js':
				if (useJsdelivr) {
					return 'https://cdn.jsdelivr.net/gh/playreia/reiajs/index.audio.worklet.js';
				} else {
					return `${uploadthing_url}/21j63lqspySP1FnDEw0oAdQ64rK37ejxaUXMCguLqWNE51Dy`;
				}
			case 'index.pck':
				return `${uploadthing_url}/21j63lqspySPLixHgQ2RCvFcGQmix5uYhs1BWqt6Hfd8wTVn`;
			case 'index.png':
				return `${uploadthing_url}/21j63lqspySPqACmKUMdSRobDvyIUx6jH1BtNh4iwcePm5ZL`;
			case 'index.audio.position.worklet.js':
				if (useJsdelivr) {
					return 'https://cdn.jsdelivr.net/gh/playreia/reiajs/index.audio.position.worklet.js';
				} else {
					return `${uploadthing_url}/21j63lqspySPnzPTcHr7K4Y0RDi3ltTXQVBJdmrEuwFaN5S9`;
				}
			case 'index.js':
				if (useJsdelivr) {
					return 'https://cdn.jsdelivr.net/gh/playreia/reiajs/index.js';
				} else {
					return `${uploadthing_url}/21j63lqspySPJUUAqDSnKw6Jr8ufSNTR29PAFWChGgXvex4q`;
				}
			case 'index.html':
				return `${uploadthing_url}/21j63lqspySPbrABJclMqh7tEvCoTmJWpVSnuriU1Y8eH2NZ`;
			case 'index.icon.png':
				return `${uploadthing_url}/21j63lqspySPMHmCSdnzNcqyCnZgGrBUOtv51ix79pVP8wa0`;
			default:
				throw new Error(`File not found: ${name}`);
		}
	}
</script>

<svelte:head>
	<link id="-gd-engine-icon" rel="icon" type="image/png" href={getFile('index.icon.png')} />
	<link rel="apple-touch-icon" href={getFile('index.apple-touch-icon.png')} />
	<script async src={getFile('index.js', true)}></script>
</svelte:head>

<canvas id="canvas"> Your browser does not support the canvas tag. </canvas>

<noscript> Your browser does not support JavaScript. </noscript>

<div id="status">
	<img
		id="status-splash"
		class="show-image--true fullsize--true use-filter--true"
		src={getFile('index.png')}
		alt=""
	/>
	<progress id="status-progress"></progress>
	<div id="status-notice"></div>
</div>

{#if browser}
	<script defer>
		const GODOT_CONFIG = {
			args: [],
			canvasResizePolicy: 2,
			ensureCrossOriginIsolationHeaders: true,
			executable: 'index',
			experimentalVK: false,
			fileSizes: {
				'https://nq0cnjludn.ufs.sh/f/21j63lqspySPLixHgQ2RCvFcGQmix5uYhs1BWqt6Hfd8wTVn': 129472,
				'https://nq0cnjludn.ufs.sh/f/21j63lqspySPgWwCJlcVMuZfNHnsywBESQm6x7p34htrW0bP': 1650612
			},
			focusCanvas: true,
			gdextensionLibs: []
		};
		const GODOT_THREADS_ENABLED = true;
		const engine = new Engine(GODOT_CONFIG);

		(function () {
			const statusOverlay = document.getElementById('status');
			const statusProgress = document.getElementById('status-progress');
			const statusNotice = document.getElementById('status-notice');

			let initializing = true;
			let statusMode = '';

			function setStatusMode(mode) {
				if (statusMode === mode || !initializing) {
					return;
				}
				if (mode === 'hidden') {
					statusOverlay.remove();
					initializing = false;
					return;
				}
				statusOverlay.style.visibility = 'visible';
				statusProgress.style.display = mode === 'progress' ? 'block' : 'none';
				statusNotice.style.display = mode === 'notice' ? 'block' : 'none';
				statusMode = mode;
			}

			function setStatusNotice(text) {
				while (statusNotice.lastChild) {
					statusNotice.removeChild(statusNotice.lastChild);
				}
				const lines = text.split('\n');
				lines.forEach((line) => {
					statusNotice.appendChild(document.createTextNode(line));
					statusNotice.appendChild(document.createElement('br'));
				});
			}

			function displayFailureNotice(err) {
				console.error(err);
				if (err instanceof Error) {
					setStatusNotice(err.message);
				} else if (typeof err === 'string') {
					setStatusNotice(err);
				} else {
					setStatusNotice('An unknown error occurred.');
				}
				setStatusMode('notice');
				initializing = false;
			}

			const missing = Engine.getMissingFeatures({
				threads: GODOT_THREADS_ENABLED
			});

			if (missing.length !== 0) {
				if (
					GODOT_CONFIG['serviceWorker'] &&
					GODOT_CONFIG['ensureCrossOriginIsolationHeaders'] &&
					'serviceWorker' in navigator
				) {
					let serviceWorkerRegistrationPromise;
					try {
						serviceWorkerRegistrationPromise = navigator.serviceWorker.getRegistration();
					} catch (err) {
						serviceWorkerRegistrationPromise = Promise.reject(
							new Error('Service worker registration failed.')
						);
					}
					// There's a chance that installing the service worker would fix the issue
					Promise.race([
						serviceWorkerRegistrationPromise
							.then((registration) => {
								if (registration != null) {
									return Promise.reject(new Error('Service worker already exists.'));
								}
								return registration;
							})
							.then(() => engine.installServiceWorker()),
						// For some reason, `getRegistration()` can stall
						new Promise((resolve) => {
							setTimeout(() => resolve(), 2000);
						})
					])
						.then(() => {
							// Reload if there was no error.
							window.location.reload();
						})
						.catch((err) => {
							console.error('Error while registering service worker:', err);
						});
				} else {
					// Display the message as usual
					const missingMsg =
						'Error\nThe following features required to run Godot projects on the Web are missing:\n';
					displayFailureNotice(missingMsg + missing.join('\n'));
				}
			} else {
				setStatusMode('progress');
				engine
					.startGame({
						onProgress: function (current, total) {
							if (current > 0 && total > 0) {
								statusProgress.value = current;
								statusProgress.max = total;
							} else {
								statusProgress.removeAttribute('value');
								statusProgress.removeAttribute('max');
							}
						}
					})
					.then(() => {
						setStatusMode('hidden');
					}, displayFailureNotice);
			}
		})();
	</script>
{/if}

<style lang="postcss">
	@reference '$appcss';

	#canvas {
		margin: 0;
		padding: 0;
		border: 0;
	}

	#canvas {
		display: block;
	}

	#canvas:focus {
		outline: none;
	}

	#status,
	#status-splash,
	#status-progress {
		position: absolute;
		left: 0;
		right: 0;
	}

	#status,
	#status-splash {
		top: 0;
		bottom: 0;
	}

	#status {
		background-color: #000000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		visibility: hidden;
	}

	#status-splash {
		max-height: 100%;
		max-width: 100%;
		margin: auto;
	}

	:global(#status-splash.show-image--false) {
		display: none;
	}

	#status-splash.fullsize--true {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	:global(#status-splash.use-filter--false) {
		image-rendering: pixelated;
	}

	#status-progress,
	#status-notice {
		display: none;
	}

	#status-progress {
		bottom: 10%;
		width: 50%;
		margin: 0 auto;
	}

	#status-notice {
		background-color: #5b3943;
		border-radius: 0.5rem;
		border: 1px solid #9b3943;
		color: #e0e0e0;
		font-family: 'Noto Sans', 'Droid Sans', Arial, sans-serif;
		line-height: 1.3;
		margin: 0 2rem;
		overflow: hidden;
		padding: 1rem;
		text-align: center;
		z-index: 1;
	}
</style>
