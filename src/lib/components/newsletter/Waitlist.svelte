<script>
	import Countdown from './Countdown.svelte';
	import * as yup from 'yup';

	/**
	 * @type {{
	 *  email?: String
	 * }}
	 */
	let errors = { "": "" };
	/**
	 * @type {{
	 *  email?: String
	 * }}
	 */
	let values = {};

	const schema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email is invalid')
	});

	const validationResult = (elem) => {
		schema
			.validate(values, { abortEarly: false })
			.then(() => {
				// alert(JSON.stringify(values, null, 2));
			})
			.catch((err) => {
				// console.log(err.errors);
			});
	};

	const validateAll = async () => {
		await schema
			.validate(values, { abortEarly: false })
			.then(() => {
				errors = {};
			})
			.catch((err) => {
				errors = err.inner.reduce(
					(/** @type {any} */ acc, /** @type {{ path: any; message: any; }} */ err) => {
						return { ...acc, [err.path]: err.message };
					},
					{}
				);
			});
	};

	async function handleSubmit(e) {
		await validateAll()
			.then(async () => {
				// get the form fields data and convert it to URLSearchParams
				const formData = new FormData(e.target);
				const data = new URLSearchParams();
				for (let field of formData) {
					const [key, value] = field;
					data.append(key, value);
				}

				const res = await fetch('https://zmp-glf.maillist-manage.com/weboptin.zc', {
					method: 'POST',
					body: data
				});
			})
			.catch((err) => {});
	}
</script>

<div class="waitlist mx-auto md: max-w-lg">
	<div class="countdown"><Countdown due={1704128400000} done="Now Available" /></div>
	<form on:submit|preventDefault={handleSubmit} class="form" method="POST">
		<input
			data-error={errors.email}
			class="input input-style"
			type="text"
			placeholder="Email"
			name="CONTACT_EMAIL"
			bind:value={values.email}
			on:input={(_) => validateAll()}
		/>
		<button
			disabled={Object.keys(errors).length > 0}
			class="btn disabled:bg-primary-700 disabled:text-white/50 bg-primary-500 un-a text-on-primary-token"
			type="submit"
			name="SIGNUP_SUBMIT_BUTTON">Join Now</button
		>
		<input type="hidden" id="fieldBorder" value="" />
		<input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
		<input type="hidden" id="emailReportId" name="emailReportId" value="" />
		<input type="hidden" id="formType" name="formType" value="QuickForm" />
		<input type="hidden" name="zx" id="cmpZuid" value="12af658ac" />
		<input type="hidden" name="zcvers" value="3.0" />
		<input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
		<input type="hidden" id="mode" name="mode" value="OptinCreateView" />
		<input type="hidden" id="zcld" name="zcld" value="110a50cd88e10e519" />
		<input type="hidden" id="zctd" name="zctd" value="110a50cd88e10e3c1" />
		<input type="hidden" id="document_domain" value="" />
		<input type="hidden" id="zc_Url" value="zmp-glf.maillist-manage.com" />
		<input type="hidden" id="new_optin_response_in" value="0" />
		<input type="hidden" id="duplicate_optin_response_in" value="0" />
		<input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
		<input
			type="hidden"
			id="zc_formIx"
			name="zc_formIx"
			value="3z398237d9e0acfc57e29aed2e3949b3714e70c52e54a72935958b852fb7a126c1"
		/>
		<input type="hidden" id="viewFrom" value="URL_ACTION" />
		<input type="hidden" id="scriptless" name="scriptless" value="yes" />
		<input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" />
	</form>
</div>

<style>
	.input-style {
		@apply placeholder-slate-200 bg-primary-500 text-on-primary-token pl-6;
	}

	.input-style[data-error] {
		@apply text-[rgb(var(--color-error-400))];
	}

	.waitlist {
		@apply flex flex-col justify-center items-center h-min mt-6;
	}

	.waitlist .countdown {
		@apply text-2xl font-bold mb-3;
	}

	.waitlist .form {
		@apply flex flex-row gap-2;
	}
</style>
