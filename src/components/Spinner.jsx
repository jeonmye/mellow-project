import React from 'react';
import { DotLoader } from 'react-spinners';

export const Spinner = () => (
  <div className="w-full min-h-screen flex justify-center items-center">
    <DotLoader size={60} color="#7FFFD4" />
  </div>
);
