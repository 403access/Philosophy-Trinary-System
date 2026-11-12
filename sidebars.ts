import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * The documentation is intentionally organised as a progressive argument:
 * foundations -> the trinary theory -> applications -> research -> implementation.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Grundlagen',
      collapsed: false,
      link: {type: 'doc', id: 'grundlagen/mathematische-philosophie'},
      items: [
        'grundlagen/geschichte',
        'grundlagen/formale-logik',
        'grundlagen/mereologie',
        'grundlagen/modalitaet',
        'grundlagen/wahrscheinlichkeit',
        'grundlagen/entscheidung-spieltheorie',
        'grundlagen/zeit-raum-prozess',
      ],
    },
    {
      type: 'category',
      label: 'Die Trinäritäts-Theorie',
      collapsed: false,
      link: {type: 'doc', id: 'trinaeritaet/einfuehrung'},
      items: [
        'trinaeritaet/formale-definition',
        'trinaeritaet/invarianz',
        'trinaeritaet/binaere-verschachtelung',
        'trinaeritaet/mereologie-verbindung',
        'trinaeritaet/verwandte-konzepte',
        'trinaeritaet/abgrenzung-usp',
        'trinaeritaet/kritik-grenzen',
      ],
    },
    {
      type: 'category',
      label: 'Anwendungen',
      collapsed: true,
      link: {type: 'doc', id: 'anwendungen/ueberblick'},
      items: [
        'anwendungen/neuro-symbolische-ki',
        'anwendungen/verteilte-systeme',
        'anwendungen/semantische-kompression',
        'anwendungen/recht-mediation',
        'anwendungen/kognition',
      ],
    },
    {
      type: 'category',
      label: 'Forschung & Umsetzung',
      collapsed: true,
      link: {type: 'doc', id: 'forschung/forschungsprogramm'},
      items: [
        'forschung/paper-outline',
        'forschung/falsifizierbarkeit',
        'forschung/offene-fragen',
        'forschung/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Implementierung',
      collapsed: true,
      link: {type: 'doc', id: 'implementierung/architektur'},
      items: [
        'implementierung/typescript',
        'implementierung/rust',
      ],
    },
    'glossar',
    'referenzen',
  ],
};

export default sidebars;
