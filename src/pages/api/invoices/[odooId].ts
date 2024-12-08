import type { NextApiRequest, NextApiResponse } from 'next';

import type { IInvoice } from '@/interfaces/invoice';
import { getInvoicesFromNotion } from '@/utils/api/invoices';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IInvoice[] | { error: string }>
) {
  const { odooId } = req.query;
  if (!odooId || Array.isArray(odooId) || Number.isNaN(Number(odooId))) {
    return res.status(400).json({ error: 'odooId invalide ou manquant.' });
  }

  // Convertir en nombre
  const odooIdNumber = Number(odooId);

  try {
    // Vérifiez le type de requête (GET, POST, etc.)
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const invoices = await getInvoicesFromNotion(odooIdNumber);

    // Vérifiez si des factures ont été trouvées
    if (!invoices) {
      return res.status(404).json({ error: 'Aucune facture trouvée.' });
    }

    return res.status(200).json(invoices);
  } catch (error: any) {
    console.error('Erreur API Backend :', error.message);
    return res.status(500).json({
      error: 'Une erreur est survenue lors de la récupération des factures.',
    });
  }
}
