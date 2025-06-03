import { useEffect, useState } from 'react';

function HeroSection() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/hero')
      .then((res) => res.json())
      .then((data) => setHero(data?.docs?.[0]))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  if (!hero) return <p>Loading...</p>;

  return (
    <div>
      <h1>{hero.title}</h1>
      <h1>{hero.subtitle}</h1>
      {hero.image?.url && (
        <img
          src={`http://localhost:3000${hero.image.url}`}
          alt={hero.image.alt || 'Hero image'}
        />
      )}
    </div>
  );
}

export default HeroSection;
