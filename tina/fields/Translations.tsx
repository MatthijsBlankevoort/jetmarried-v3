import * as React from 'react';
import { useCMS } from 'tinacms';

/**
 * A 'Vertalingen' panel that links a document to its counterparts in the other
 * languages. Content is grouped per type with the language as a folder or as
 * the filename, so a counterpart's path is this document's path with the
 * locale swapped — no extra field in the content file is needed to tie them
 * together.
 *
 * Each row is checked against the API, so a missing translation shows up as
 * missing instead of as a dead link.
 */
type FieldComponentProps = {
	tinaForm?: { path?: string; relativePath?: string };
	field?: { collection?: string };
};

const locales = [
	{ code: 'nl', label: 'Nederlands' },
	{ code: 'en', label: 'English' },
	{ code: 'de', label: 'Deutsch' },
] as const;

type Status = 'checking' | 'present' | 'missing';

/**
 * Splits a document path into the parts we need.
 * 'content/posts/nl/ja-ik-wil.mdx' → collection 'posts', locale 'nl', rest 'ja-ik-wil.mdx'
 * 'content/home/nl.json'           → collection 'home',  locale 'nl', rest ''
 */
const readPath = (path: string) => {
	const parts = path.split('/').filter(Boolean);
	const file = parts.pop() ?? '';
	const extension = file.includes('.') ? file.slice(file.lastIndexOf('.')) : '';
	// A blog post sits in a locale folder; homepage and settings are named after the locale.
	const inFolder = locales.some(({ code }) => parts[parts.length - 1] === code);
	const locale = inFolder ? parts.pop()! : file.slice(0, file.length - extension.length);
	const collection = parts.pop() ?? '';
	return { collection, locale, name: inFolder ? file : '', extension };
};

/** The relativePath the API knows a document by — relative to the collection root. */
const relativePathFor = (locale: string, parsed: ReturnType<typeof readPath>) =>
	parsed.name ? `${locale}/${parsed.name}` : `${locale}${parsed.extension}`;

const editUrl = (collection: string, relativePath: string) =>
	`#/collections/edit/${collection}/~/${relativePath.replace(/\.[^./]+$/, '')}`;

const EXISTS_QUERY = `
	query Translation($collection: String!, $relativePath: String!) {
		document(collection: $collection, relativePath: $relativePath) {
			__typename
		}
	}
`;

export const Translations = ({ tinaForm }: FieldComponentProps) => {
	const cms = useCMS();
	const path = tinaForm?.path ?? tinaForm?.relativePath ?? '';
	const parsed = React.useMemo(() => readPath(path), [path]);
	const [status, setStatus] = React.useState<Record<string, Status>>({});

	React.useEffect(() => {
		if (!parsed.collection) return;
		let cancelled = false;

		locales.forEach(async ({ code }) => {
			if (code === parsed.locale) return;
			const relativePath = relativePathFor(code, parsed);
			setStatus((current) => ({ ...current, [code]: 'checking' }));
			try {
				// A missing document either throws or comes back as a GraphQL error
				// with a null payload, depending on the client — handle both.
				const response = await cms.api.tina.request(EXISTS_QUERY, {
					variables: { collection: parsed.collection, relativePath },
				});
				const found = !!response?.document && !response?.errors?.length;
				if (!cancelled) setStatus((current) => ({ ...current, [code]: found ? 'present' : 'missing' }));
			} catch {
				if (!cancelled) setStatus((current) => ({ ...current, [code]: 'missing' }));
			}
		});

		return () => {
			cancelled = true;
		};
	}, [cms, parsed]);

	if (!parsed.collection) return null;

	return (
		<div style={{ padding: '1rem 0' }}>
			<div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fff' }}>
				<h3 style={{ margin: '0 0 0.25rem', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Vertalingen</h3>
				<p style={{ margin: '0 0 0.75rem', fontSize: 11, color: '#64748b' }}>
					Deze pagina's horen bij elkaar. Ze zijn gekoppeld via de bestandsnaam, dus die moet in elke taal gelijk blijven.
				</p>
				<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
					{locales.map(({ code, label }) => {
						const current = code === parsed.locale;
						const state = current ? 'present' : (status[code] ?? 'checking');
						return (
							<li
								key={code}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '0.625rem',
									padding: '0.375rem 0',
									borderTop: '1px solid #f1f5f9',
								}}
							>
								<span
									aria-hidden="true"
									style={{
										flex: '0 0 auto',
										width: 8,
										height: 8,
										borderRadius: '50%',
										background: state === 'present' ? '#16a34a' : state === 'missing' ? '#dc2626' : '#cbd5e1',
									}}
								/>
								<span style={{ fontSize: 13, color: '#0f172a', fontWeight: current ? 600 : 400, flex: 1 }}>
									{label}
									{current && <span style={{ color: '#64748b', fontWeight: 400 }}> — je bewerkt deze nu</span>}
								</span>
								{!current && state === 'present' && (
									<a
										href={editUrl(parsed.collection, relativePathFor(code, parsed))}
										style={{ fontSize: 12, color: '#2563eb', textDecoration: 'none' }}
									>
										Openen
									</a>
								)}
								{!current && state === 'missing' && (
									<span style={{ fontSize: 12, color: '#dc2626' }}>Ontbreekt</span>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
