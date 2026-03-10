import type { Metadata } from 'next';
import CennikPage from '@/components/CennikPage';

export const metadata: Metadata = {
    title: 'Cenník | LUDATO FAMILY Cars Services',
    description:
        'Cenník autoservisných služieb LUDATO FAMILY. Výmena oleja, diagnostika, brzdy, pneumatiky, klimatizácia a ďalšie. Normohodina 28€.',
};

export default function Cennik() {
    return <CennikPage />;
}
