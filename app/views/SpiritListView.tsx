import React from 'react';
import { useRouter } from 'expo-router';
import { useSpiritListViewModel } from '../../viewmodels/useSpiritListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function SpiritListView() {
  const router = useRouter();
  const { spiritOptions, isLoading } = useSpiritListViewModel();

  return (
    <EntityListView
      title="Spirit Summons"
      options={spiritOptions}
      isLoading={isLoading}
      getSubtitle={(spirit) => spirit.description}
      getMeta={(spirit) => (spirit.fpCost != null ? `FP ${spirit.fpCost}` : undefined)}
      onSelect={(spirit) =>
        router.push({
          pathname: '/views/SpiritDetailsView',
          params: { query: spirit.name },
        })
      }
    />
  );
}
