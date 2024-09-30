// Inside pages/temp.js (or similar, adjust according to your file structure and naming conventions)

import dynamic from 'next/dynamic';
import React from 'react';

const ShoeModelWithCanvas = dynamic(() => import('@/components/ShoeModelWithCanvas'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function TempPage() {
  return <ShoeModelWithCanvas />;
}
