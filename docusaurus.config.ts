import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const siteUrl = 'https://403access.github.io';
const baseUrl = '/Philosophy-Trinary-System/';
const repoUrl =
  'https://github.com/403access/Philosophy-Trinary-System';

const config: Config = {
  title: 'Mathematische Philosophie',
  tagline:
    'Formale Ontologie, Trinärität und die Logik der Perspektive — ein Forschungsprogramm zwischen Logik, Philosophie und KI.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl,
  trailingSlash: false,

  organizationName: '403access',
  projectName: 'Philosophy-Trinary-System',

  onBrokenLinks: 'warn',

  // Use MDX so Docusaurus admonitions (:::note) and rich components work.
  // Mathematical notation is handled by remark-math / rehype-katex.
  markdown: {
    format: 'mdx',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
      type: 'text/css',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: `${repoUrl}/tree/main/`,
        },
        blog: {
          path: 'blog',
          routeBasePath: 'forschung',
          blogTitle: 'Forschungslog',
          blogDescription:
            'Notizen, Entwürfe und Zwischenstände aus dem Forschungsprogramm zur Trinärität.',
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: `${repoUrl}/tree/main/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'preprint-v01',
      content:
        `📄 Preprint v0.1 — Das Forschungsprogramm zur Trinärität ist als PDF verfügbar. <a href="${baseUrl}paper">Paper lesen &amp; herunterladen</a>`,
      backgroundColor: '#0f6b6b',
      textColor: '#fbfaf7',
      isCloseable: true,
    },
    navbar: {
      title: 'Mathematische Philosophie',
      hideOnScroll: false,
      logo: {
        alt: 'Mathematische Philosophie — Trinärität',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Dokumentation',
        },
        {to: '/roadmap', label: 'Roadmap', position: 'left'},
        {to: '/paper', label: 'Paper & PDF', position: 'left'},
        {to: '/forschung', label: 'Forschungslog', position: 'left'},
        {
          href: repoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Werk',
          items: [
            {label: 'Einführung', to: '/docs/intro'},
            {label: 'Die Trinärität', to: '/docs/trinaeritaet/einfuehrung'},
            {label: 'Formale Definition', to: '/docs/trinaeritaet/formale-definition'},
            {label: 'Roadmap', to: '/roadmap'},
          ],
        },
        {
          title: 'Forschung',
          items: [
            {label: 'Forschungsprogramm', to: '/docs/forschung/forschungsprogramm'},
            {label: 'Paper-Outline', to: '/docs/forschung/paper-outline'},
            {label: 'Falsifizierbarkeit', to: '/docs/forschung/falsifizierbarkeit'},
            {label: 'Forschungslog', to: '/forschung'},
          ],
        },
        {
          title: 'Material',
          items: [
            {label: 'Paper als PDF', to: '/paper'},
            {label: 'Glossar', to: '/docs/glossar'},
            {label: 'Referenzen', to: '/docs/referenzen'},
            {label: 'GitHub', href: repoUrl},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Mathematische Philosophie · Trinärität. Ein offenes Forschungsprogramm. Gebaut mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'typescript', 'json', 'bash'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
