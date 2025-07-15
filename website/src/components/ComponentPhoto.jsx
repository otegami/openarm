import React from 'react';

export default function ComponentPhoto({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: '10em', height: '10em', objectFit: 'contain' }}
    />
  );
}
