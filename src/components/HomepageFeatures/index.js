import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Think',
    Svg: require('@site/static/img/think.svg').default,
    description: (
      <>
        Erfolgreiche Projekte beginnen mit einer klaren Idee und einer fundierten Strategie. 
        Bereits in der Konzeptionsphase werden Ziele definiert und erste Ansätze skizziert, 
        die den Grundstein für eine nachhaltige Umsetzung legen.
      </>
    ),
  },
  {
    title: 'Research',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        Die fundierte Analyse von Technologien, Best Practices und existierenden Lösungen ist essenziell. 
        Durch kontinuierliche Recherche werden Herausforderungen frühzeitig erkannt und effektive Lösungswege identifiziert.
      </>
    ),
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
        Die Umsetzung erfolgt in iterativen Schritten, in denen Konzept und Code stetig verfeinert werden. 
        Ein strukturierter Entwicklungsprozess sorgt dafür, dass das Endprodukt nicht nur funktional, 
        sondern auch zukunftssicher und wartbar ist.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
