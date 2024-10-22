import dynamic from 'next/dynamic';

const DynamicServiceCard = dynamic(() => import('./ServiceCard'), { ssr: false });

export default DynamicServiceCard;