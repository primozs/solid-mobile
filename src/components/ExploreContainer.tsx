import styles from './Explore.module.css';

export const ExpoloreContainer = (props: { name: string }) => {
  return (
    <div class={styles.container}>
      <strong>{props.name}</strong>
      <p>
        Explore{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};
