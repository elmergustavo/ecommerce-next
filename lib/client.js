import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'b8p0tfki',
    dataset: 'production',
    apiVersion: '2022-06-13',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);