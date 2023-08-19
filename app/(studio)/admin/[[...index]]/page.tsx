'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

// importing all setting from config file to be used and passed to the Next app

export default function AdminPage() {
  return <NextStudio config={config} />;
}
