import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          //   src="https://res.cloudinary.com/db9i05s6n/image/upload/v1668040952/blog/me/melah_facaad.jpg"
          src="/images/site/melach.jpg "
          alt="My Picture / Dead Sea"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Amabelle</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Next.js.
      </p>
    </section>
  );
}

export default Hero;
