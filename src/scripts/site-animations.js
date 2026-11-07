import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function initFaq() {
	const items = Array.from(document.querySelectorAll('[data-faq]'));
	if (!items.length) return;

	let open = 0;

	// Height is animated in CSS (grid rows); closed answers are inert so they drop out of the tab order.
	const setOpen = (i) => {
		items.forEach((item, k) => {
			const on = k === i;
			item.classList.toggle('faq-item-open', on);
			item.querySelector('[data-faq-a]')?.toggleAttribute('inert', !on);
			item.querySelector('[data-faq-q]')?.setAttribute('aria-expanded', String(on));
		});
		open = i;
	};

	items.forEach((item, i) => {
		const head = item.querySelector('[data-faq-q]');
		head?.addEventListener('click', () => setOpen(open === i ? -1 : i));
	});

}

function initLocations() {
	const imgs = Array.from(document.querySelectorAll('[data-locimg]'));
	const chips = Array.from(document.querySelectorAll('[data-loc]'));
	if (!imgs.length || !chips.length) return;

	let active = Math.max(0, imgs.findIndex((img) => img.classList.contains('loc-img-active')));
	const show = (i) => {
		if (i === active) return;
		imgs[active].classList.remove('loc-img-active');
		imgs[active].setAttribute('aria-hidden', 'true');
		imgs[i].classList.add('loc-img-active');
		imgs[i].removeAttribute('aria-hidden');
		chips.forEach((c, k) => {
			c.classList.toggle('loc-chip-active', k === i);
			c.setAttribute('aria-pressed', String(k === i));
		});
		active = i;
	};

	chips.forEach((chip, i) => {
		chip.addEventListener('mouseenter', () => show(i));
		chip.addEventListener('click', () => show(i));
	});
}

// Carousel arrows work without GSAP too (keyboard, reduced motion); GSAP only adds the easing.
function initTestimonials(animate) {
	const view = document.querySelector('[data-rev-view]');
	const track = document.querySelector('[data-rev-track]');
	const bar = document.querySelector('[data-rev-bar]');
	const prev = document.querySelector('[data-rev-prev]');
	const next = document.querySelector('[data-rev-next]');
	if (!view || !track) return;

	let maxX = 0;
	let x = 0;
	const measure = () => {
		maxX = Math.max(0, track.scrollWidth - view.clientWidth + 24);
		x = Math.min(0, Math.max(-maxX, x));
	};

	const render = (duration) => {
		const progress = 0.22 + (Math.abs(x) / (maxX || 1)) * 0.78;
		if (animate) {
			// Always go through GSAP when it is in charge, so its cached position never goes stale.
			gsap.to(track, { x, duration, ease: 'power3.out', overwrite: true });
			if (bar) gsap.to(bar, { scaleX: progress, duration, ease: 'power3.out', overwrite: true });
		} else {
			track.style.transform = `translateX(${x}px)`;
			if (bar) bar.style.transform = `scaleX(${progress})`;
		}
		if (prev) prev.disabled = x >= 0;
		if (next) next.disabled = x <= -maxX;
	};

	measure();
	render(0);
	window.addEventListener('resize', () => {
		measure();
		render(0);
	});

	let dragging = false;
	let startX = 0;
	let base = 0;
	view.addEventListener('pointerdown', (e) => {
		dragging = true;
		startX = e.clientX;
		base = x;
		view.style.cursor = 'grabbing';
	});
	window.addEventListener('pointermove', (e) => {
		if (!dragging) return;
		x = Math.min(0, Math.max(-maxX, base + (e.clientX - startX)));
		render(0);
	});
	window.addEventListener('pointerup', () => {
		if (!dragging) return;
		dragging = false;
		view.style.cursor = 'grab';
	});

	const step = () => {
		const card = track.children[0];
		return card ? card.getBoundingClientRect().width + 18 : 418;
	};
	const nudge = (dir) => {
		x = Math.min(0, Math.max(-maxX, x - dir * step()));
		render(0.7);
	};
	prev?.addEventListener('click', () => nudge(-1));
	next?.addEventListener('click', () => nudge(1));
	view.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowRight') nudge(1);
		if (e.key === 'ArrowLeft') nudge(-1);
	});
}

function initGsap() {
	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ overwrite: 'auto' });

	gsap.set('[data-hero]', { y: 34, opacity: 0 });
	gsap.to('[data-hero]', { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.09, delay: 0.15 });

	const header = document.querySelector('[data-header]');
	if (header) {
		gsap.from(header, { y: -70, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.05 });
	}

	document.querySelectorAll('[data-reveal]').forEach((el) => {
		gsap.fromTo(
			el,
			{ y: 42, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.95,
				ease: 'power3.out',
				scrollTrigger: { trigger: el, start: 'top 88%', once: true },
			},
		);
	});

	const hero = document.querySelector('[data-hero-scale]');
	const heroImg = document.querySelector('[data-hero-img]');
	if (hero) {
		gsap.to(hero, {
			scale: 0.955,
			ease: 'none',
			scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
		});
	}
	if (heroImg && hero) {
		gsap.to(heroImg, {
			yPercent: 8,
			ease: 'none',
			scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
		});
	}

	const marquee = document.querySelector('[data-marquee]');
	if (marquee) {
		const half = marquee.scrollWidth / 2;
		gsap.to(marquee, { x: -half, duration: 34, ease: 'none', repeat: -1 });
		gsap.to(marquee, {
			x: '-=180',
			ease: 'none',
			scrollTrigger: { trigger: marquee, start: 'top bottom', end: 'bottom top', scrub: 1 },
		});
	}

	// header shrink + tighten on scroll
	if (header) {
		ScrollTrigger.create({
			start: 60,
			onEnter: () => gsap.to(header, { scale: 0.965, y: -5, duration: 0.5, ease: 'power2.out' }),
			onLeaveBack: () => gsap.to(header, { scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }),
		});
	}

	// werkwijze: staggered reveal + active-step border + progress line
	const steps = Array.from(document.querySelectorAll('[data-step]'));
	steps.forEach((el) => {
		const card = el.querySelector('[data-step-card]');
		const dot = el.querySelector('[data-step-dot]');
		const cols = card ? card.children : [];
		const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 84%', once: true } });
		tl.fromTo(el, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
		if (dot) tl.fromTo(dot, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2.4)' }, 0.1);
		if (cols.length) tl.fromTo(cols, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.09 }, 0.2);

		ScrollTrigger.create({
			trigger: el,
			start: 'top 66%',
			end: 'bottom 34%',
			onToggle: (self) => {
				if (card) {
					gsap.to(card, {
						borderColor: self.isActive ? '#b9a684' : '#e2dacb',
						duration: 0.45,
					});
				}
				if (dot) {
					gsap.to(dot, { borderColor: self.isActive ? '#9c7a55' : '#c6b99f', scale: self.isActive ? 1.15 : 1, duration: 0.45 });
				}
			},
		});
	});

	// The progress line is drawn through a custom property, so CSS decides whether it runs down or across.
	const stepBar = document.querySelector('[data-step-bar]');
	if (stepBar) {
		gsap.to(stepBar.parentNode, {
			'--p': 1,
			ease: 'none',
			scrollTrigger: { trigger: stepBar.parentNode, start: 'top 72%', end: 'bottom 78%', scrub: 0.6 },
		});
	}

	// testimonials: hover lift + staggered reveal (dragging and arrows live in initTestimonials)
	const revView = document.querySelector('[data-rev-view]');
	const revTrack = document.querySelector('[data-rev-track]');
	if (revView && revTrack) {
		document.querySelectorAll('[data-rev]').forEach((card) => {
			card.addEventListener('mouseenter', () => gsap.to(card, { y: -10, duration: 0.4, ease: 'power3.out' }));
			card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.5, ease: 'power3.out' }));
		});

		gsap.fromTo(
			revTrack.children,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 0.7,
				ease: 'power3.out',
				stagger: 0.07,
				scrollTrigger: { trigger: revView, start: 'top 88%', once: true },
			},
		);
	}

	// about: motto underline reveal
	const motto = document.querySelector('[data-motto]');
	const mottoLine = document.querySelector('[data-motto-line]');
	if (motto && mottoLine) {
		gsap
			.timeline({ scrollTrigger: { trigger: motto, start: 'top 82%', once: true } })
			.fromTo(motto, { color: '#4a463f' }, { color: '#7d5f3e', duration: 0.6, ease: 'power2.out' })
			.to(mottoLine, { scaleX: 1, duration: 0.7, ease: 'power3.inOut' }, 0.1);
	}

	// ceremonies: staggered reveal, hover lift, scroll-active border
	document.querySelectorAll('[data-cer]').forEach((card, i) => {
		const img = card.querySelector('[data-cer-img]');
		const txt = card.children[1];
		const flip = i % 2 === 1;
		const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 84%', once: true } });
		tl.fromTo(card, { y: 46, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
		if (img) tl.fromTo(img, { xPercent: flip ? 5 : -5, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, 0.05);
		if (txt) tl.fromTo(txt.children, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.07 }, 0.18);

		card.addEventListener('mouseenter', () => {
			if (img) gsap.to(img, { scale: 1.02, duration: 0.6, ease: 'power3.out' });
		});
		card.addEventListener('mouseleave', () => {
			if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: 'power3.out' });
		});

		ScrollTrigger.create({
			trigger: card,
			start: 'top 62%',
			end: 'bottom 38%',
			onToggle: (self) => {
				gsap.to(card, { borderColor: self.isActive ? '#b9a684' : 'rgba(226,218,203,0)', duration: 0.45, ease: 'power2.out' });
			},
		});
	});

	ScrollTrigger.refresh();
}

function init() {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	initFaq();
	initLocations();
	initTestimonials(!reduceMotion);
	// With reduced motion everything simply stays in place and visible.
	if (!reduceMotion) initGsap();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
